const express = require("express");
const next = require("next");
const fileUpload = require("express-fileupload");

const server = express();

const PORT = parseInt(process.env.PORT, 10) || 3000;
//const AUTH_SECRET = "013N1V.s3cr3t"; //TODO: Cambiar a variable de entorno

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const helpers = require("./data/helperBodies.json");

const database = require("./lib/server/DB");
const Api = require("./lib/server/API");
const Mail = require("./lib/server/Mail");

const DB = new database({ dev });
const API = new Api({
	db: DB
});
const mail = new Mail();

server
	.use(express.json())
	.use(fileUpload());

/*const authMiddleware = (req, res, next) => {
	const {authorization} = req.headers;

	const decriptAuth = Buffer.from(authorization, "hex").toString("utf8");

	if (decriptAuth !== AUTH_SECRET)
		res.sendStatus(401);
	else
		return next();
};*/

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

				try {
					switch(action) {
					case "delete-event":
						await DB.deleteEvent(ID);

						res.json({
							status: "ok"
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
			.post("/api/admin/:action", async (req, res) => {
				try {
					const {action} = req.params;

					switch(action) {
					case "login":
						if (req.body.username == "oieniv" && req.body.password == 1234) {
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

						res.json(await API.CreateEvent(req));

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
			.post("/send-comment", async (req, res) => {
				try {
					const {name, email, phone, message} = req.body;

					const data = await mail.sendContactMessage(name, email, phone, message);

					res.json(data);
				} catch(err) {
					res.send(err.toString());
				}
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
