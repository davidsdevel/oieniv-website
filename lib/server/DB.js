const Knex = require("knex");
const {readFileSync, unlinkSync} = require("fs");
const {join} = require("path");
const schedule = require("node-schedule");

class DB {
	constructor(opts) {
		var connection;
		var client;

		const {dev} = opts;

		if (dev) {
			client = "mysql";
			connection = {
				host: '127.0.0.1',
				user: 'root',
				password: '',
				database: 'oieniv'
			};
		} else {
			client = "pg";
			connection = process.env.DATABASE_URL;
		}
		console.log("> Connecting with DB");
		this.db = Knex({
		    client,
		    connection
		});
		this.client = client;
		this.jobs = {};
	}
	async init() {
		console.log("> Creating Tables");
		var createEventsTablePromise;
		var createImagesTablePromise

		const existsEventsTable = await this.db.schema.hasTable("events");
		const existsImagesTable = await this.db.schema.hasTable("images");

		if (!existsEventsTable)
			createEventsTablePromise = this.db.schema.createTable("events", table => {
				table.increments("ID").primary();
				table.string("name");
				table.string("description");
				table.string("date");
				table.string("time");
				table.string("location", 1);
				table.string("image");
				table.string("church");
			});

		if (!existsImagesTable)
			createImagesTablePromise = this.db.schema.createTable("images", table => {
				table.increments("ID").primary();

				if (this.client === "mysql")
					table.specificType("buffer", "mediumblob");
				else
					table.binary("buffer");

				table.string("type");
				table.string("name");
			});

		return Promise.all([createEventsTablePromise, createImagesTablePromise]);
	}
	events() {
		return new Promise(async (resolve, reject) => {
			try {
				var rows = await this.db("events").select("*");

				rows = rows.sort((a, b) => {
					let dateA = new Date(a.date + " " + a.time);
					let dateB = new Date(b.date + " " + b.time);

					if (dateA > dateB)
						return +1;
					else
						return -1
				});

				resolve(rows);
			} catch(err) {
				reject(err);
			}
		});
	}
	createEvent(ID, data) {
		return new Promise(async (resolve, reject) => {
			try {
				if (!ID || ID === "undefined")
					ID = await this.db("events").insert(data, "ID");
				else {
					let eventFetch = await this.db("events").where({ID}).select("image");
					let eventImageName = eventFetch[0].image;
					var imageName = data.image;

					if (eventImage !== imageName) {
						var imageID = imageName.match(/\/\d*(?=\/)/)[0].slice(1);

						await this.db("images").where({ID: imageID}).delete();
						await this.db("events").where({ID}).update(data);
					}
				}

				const start = new Date(data.date + " " + data.time);

				this.jobs[ID] = schedule.scheduleJob(start, () => {
					this.removeEvent(ID);
				});
				resolve();
			} catch(err) {
				reject(err);
			}
		});
	}
	deleteEvent(ID) {
		return new Promise(async (resolve, reject) => {
			try {
				let imageFetch = await this.db("events").where({ID}).select("image");

				var imageName = imageFetch[0].image;
				var imageID = imageName.match(/\/\d*(?=\/)/)[0].slice(1);

				await this.db("images").where({ID: imageID}).delete();
				await this.db("events").where({ID}).delete();

				resolve();
			} catch(err) {
				reject(err);
			}
		});
	}
	uploadImage(data) {
		return new Promise(async (resolve, reject) => {
			try {
				let ID = await this.db("images").insert(data, "ID");

				resolve(ID);
			} catch(err) {
				reject(err);
			}
		});
	}
	getImage(ID, name) {
		return new Promise(async (resolve, reject) => {

			try {
				let data = await this.db("images").where({ID, name}).select("buffer", "type");

				if (data.length === 0)
					resolve("none");
				else
					resolve(data[0]);
			} catch(err) {
				reject(err);
			}
		});
	}
}

module.exports = DB;
