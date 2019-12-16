const {readFileSync, unlink, existsSync, mkdirSync} = require("fs");
const {join} = require("path");

class API {
	constructor({db}) {
		this.db = db;
	}
	async SliderData() {
		try {
			const events = await this.db.events();
			return Promise.resolve(events);
		} catch(err) {
			return Promise.reject(err);
		}
	}
	async CreateEvent(req) {
		try {
			const {ID, name, description, date, time, location, church, image, imageName, imageType} = req.body;
			
			const eventTime = new Date(`${date} ${time}`);

			if (eventTime < Date.now())
				return Promise.resolve({
					status: "Error",
					message: "Fecha del evento incorrecta"
				});

			if (!req.files) {
				await this.db.createEvent(ID, {
					name,
					description,
					date,
					time,
					image,
					location,
					church
				});

				return Promise.resolve({
					status: "OK",
					message: "Evento creado exitosamente"
				});

			} else {

				const {file} = req.files;

				var path = join(__dirname, "files");
				if (!existsSync(path))
					mkdirSync(path);

				return new Promise((resolve, reject) => {
					const filepath = join(path, name);
					file.mv(filepath, async () => {
						try{
							let imageID = await this.db.uploadImage({
								name: imageName,
								type: imageType,
								buffer: Buffer.from(readFileSync(filepath))
							});

							let image = `/uploads/${imageID}/${imageName}`;

							await this.db.createEvent(ID, {
								name,
								description,
								date,
								time,
								image,
								location,
								church
							});

							unlink(filepath, (err) => {
								if (err)
									reject(err);
								else
									resolve({
										status: "OK",
										message: "Evento creado exitosamente"
									});
							});
						} catch(err) {
							console.error(err);
							reject({
								status:err
							});
						}
					});
				});
			}
		} catch(err) {
			return Promise.reject(err);
		}
	}
}

module.exports = API;
