const {readFileSync, unlinkSync, existsSync, mkdirSync} = require("fs");
const {join} = require("path");

class API {
	constructor({db}) {
		this.db = db;
	}
	SliderData() {
		return new Promise(async (resolve, reject) => {
			try {
				const events = await this.db.events();
				resolve(events);
			} catch(err) {
				reject(err);
			}
		});
	}
	CreateEvent(req) {
		return new Promise(async (resolve, reject) => {
			try {
				const {ID, name, description, date, time, location, church, image,imageName, imageType} = req.body;
				
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
					resolve({
						status: "OK"
					});
				} else {

					const {file} = req.files;

					var path = join(__dirname, "files");
					if (!existsSync(path))
						mkdirSync(path);

					const filepath = join(path, name);
					file.mv(filepath, async () => {
						try{
							let imageID = await this.db.uploadImage({
								name: imageName,
								type: imageType,
								buffer: Buffer.from(readFileSync(filepath))
							});

							image = `/uploads/${imageID}/${imageName}`;

							await this.db.createEvent(ID, {
								name,
								description,
								date,
								time,
								image,
								location,
								church
							});
							unlinkSync(filepath);
							resolve({
								status: "OK"
							});
						} catch(err) {
							console.error(err);
							reject({
								status:err
							});
						}
					});
				}
			} catch(err) {
				reject(err);
			}
		});
	}
}

module.exports = API;
