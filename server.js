const express = require("express");
const next = require("next");

const {writeFile, readFile, exists} = require("fs");
const {join} = require("path");

const server = express();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const AUTH_SECRET = "013N1V.s3cr3t"; //TODO: Change to env var

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const helpers = require("./data/helperBodies.json");
const sessionFile = join(__dirname, "data", "session");

server.use(express.json());

const authMiddleware = (req, res, next) => {
	const {authorization} = req.headers;

	const decriptAuth = Buffer.from(authorization, "hex").toString("utf8");

	if (decriptAuth !== AUTH_SECRET)
		res.sendStatus(401);
	else
		return next();
};

async function Prepare() {
	await app.prepare();

	server
		.get("/data/:helperName", ({params}, res) => {
			const {helperName} = params;

			if (helperName === "index") {
				const events = require("./data/slider.json");
				return res.json(events);
			}

			const helper = helpers[helperName];

			if (helper)
				res.json(helper);
			else
				res.sendStatus(404);
		})
		.get("/api/admin/:action", authMiddleware, ({params}, res) => {
			const {action} = params;

			switch(action) {
			case "session":
				exists(sessionFile, (existsErr, existsSession) => {
					if (existsSession)
						readFile(sessionFile, (readErr, data) => {
							res.json({
								logged: JSON.parse(data)
							});
						});
					else
						res.json({
							logged: false
						});
				});
				break;
			default:
				res.sendStatus(404);
				break;
			}
		})
		.post("/api/admin/:action", ({params, body}, res) => {
			const {action} = params;
			const {username, password, saveSession} = body;

			switch(action) {
			case "login":
				if (username == "oieniv" && password == 1234) {
					if (saveSession) {
						writeFile(sessionFile, "true", (err) => {
							if (err)
								throw new Error(err);

							res.json({
								success: true
							});
						});
					} else {
						writeFile(sessionFile, "false", (err) => {
							if (err)
								throw new Error(err);

							res.json({
								success: true
							});
						});
					}
				} else {
					res.json({
						success: false,
						message: "Nombre de usuario o contraseña incorrectos"
					});
				}
				break;
			default:
				res.sendStatus(404);
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
}

Prepare();
