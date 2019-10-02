const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const helpers = require("./data/helperBodies.json");

async function Prepare() {
	try {
		await app.prepare();
		const server = express();

		server.use(express.json());

		server
			.get("/:helper", ({params}, res, next) => {
				const {helper} = params;
				const helpersNames = Object.keys(helpers);

				if (helpersNames.indexOf(helper) > -1)
					return app.render(req, res, "/helper", helpers[helper]);

			})
			.post("/send-comment", ({body}, res, next) => {
				res.send("sucess");
			})
			.get("*", (req, res) => {
				return handle(req, res);
			})
			.listen(port, (err) => {
			  if (err) throw err;
			  console.log(`> Ready on http://localhost:${port}`);
			});
	} catch(err) {
		throw err;
	}
}

Prepare();
