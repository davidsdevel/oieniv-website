const express = require("express");
const next = require("next");
const fileUpload = require("express-fileupload");

const {writeFile, readFile, exists} = require("fs");

const server = express();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const AUTH_SECRET = "013N1V.s3cr3t"; //TODO: Change to env var

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const helpers = require("./data/helperBodies.json");

const database = require("./lib/server/DB");
const Api = require("./lib/server/API");

const DB = new database({ dev });
const API = new Api({
	db: DB,
});

server
	.use(express.json())
	.use(fileUpload());

const authMiddleware = (req, res, next) => {
	const {authorization} = req.headers;

	const decriptAuth = Buffer.from(authorization, "hex").toString("utf8");

	if (decriptAuth !== AUTH_SECRET)
		res.sendStatus(401);
	else
		return next();
};

async function Prepare() {
	try {
		console.log("> Init DB");
		await DB.init();

		console.log("> Preparing App");
		await app.prepare();

		server
			.get("/data/:helperName", async ({params}, res) => {
				const {helperName} = params;

				if (helperName === "index") {
					const events = await API.SliderData();
					return res.json(events);
				}

				const helper = helpers[helperName];

				if (helper)
					res.json(helper);
				else
					res.sendStatus(404);
			})
			.delete("/api/admin/:action", async ({params, body}, res) => {
				const {action} = params;
				const {ID} = body;

				switch(action) {
				case "delete-event":
					try {
						await DB.deleteEvent(ID);
						res.json({
							status: "ok"
						});
					} catch(err) {
						console.error(err);
						res.status(500).send(err);
					}
					break;
				default:
					res.sendStatus(404);
				}
			})
			.post("/api/admin/:action", async (req, res) => {
				try {
					const {action} = req.params;

					switch(action) {
					case "login":
						let {username, password, saveSession} = req.body;

						if (username == "oieniv" && password == 1234) {
							res.json({
								success: true
							});
						} else {
							res.json({
								success: false,
								message: "Nombre de usuario o contraseña incorrectos"
							});
						}
						break;
					case "create-event":
						await API.CreateEvent(req);
						res.json({
							status: "OK"
						});
						break;
					default:
						res.sendStatus(404);
					}
				} catch(err) {
					console.error(err);
					res.status(500).send(err);
				}
			})
			.get("/uploads/:ID/:name", async (req, res) => {
				try {
					const {ID, name} = req.params;

					const data = await DB.getImage(ID, name);

					if (data === "none")
						res.sendStatus(404);
					else {
						res.set({
							"Content-Type": data.type
						});

						res.send(data.buffer);
					}
				} catch(err) {
					res.status(500).send(err);
				}
			})
			.post("/send-comment", (req, res) => {
				res.send("sucess");
			})
			.get("*", (req, res) => handle(req, res))
			.listen(PORT, err => {
				if (err)
					throw new Error(err);
				console.log(`> Ready on http://localhost:${PORT}`);
			});
	} catch(err) {
		throw new Error(err);
	}
}

Prepare();
