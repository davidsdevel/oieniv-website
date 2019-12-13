import React, {Component} from "react";
import Event from "../index/event";
import store from "../../store/reducer";
import {showAlert, closeEdit} from "../../store/actionCreators";
import {object} from "prop-types";

class ManageEvents extends Component {
	constructor(props) {
		super(props);

		const {data} = props;

		this.state = {
			...data
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.createEvent = this.createEvent.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleImage = this.handleImage.bind(this);
		this.preview = this.preview.bind(this);
	}
	componentDidMount() {
		let temp = localStorage.getItem("temp");

		if (temp) {
			temp = JSON.parse(temp);

			this.setState({
				...temp
			});
		}
	}
	handleImage({target}) {
		this.setState({
			preview: false
		});

		const {files} = target;
		const image = files[0];
		const imageName = image.name;
		const imageType = image.type;

		const fileRader = new FileReader();
		fileRader.readAsDataURL(image);

		fileRader.onloadend = ({target}) => {
			this.setState({
				image: target.result,
				imageBlob: files[0],
				imageName,
				imageType
			});
		}
	}
	handleInput({target}) {
		this.setState({
			preview: false
		});
		const {name, value} = target;

		this.setState({
			[name]: value
		});

		let {ID, name:stateName, description, date, time, location} = this.state;

		localStorage.setItem("temp", JSON.stringify({ID, name:stateName, description, date, time, location}));
	}
	async createEvent() {
		try {
			const {ID, name, church, image, description, date, time, location, preview, imageType, imageName, imageBlob} = this.state;
			
			const formData = new FormData();

			formData.append("ID", ID || undefined);
			formData.append('name', name);
			formData.append('description', description);
			formData.append('date', date);
			formData.append('time', time);
			formData.append('location', location === "none" ? null : location);
			formData.append('church', church);
			formData.append('imageName', imageName);
			formData.append('imageType', imageType);
			formData.append('file', imageBlob);

			if (ID && /^\/uploads\/\d*\//.test(image))
				formData.append("image", image);
		
			const res = await fetch("/api/admin/create-event", {
				method: "POST",
				body: formData
			});


			if (res.status >= 500)
				store.dispatch(showAlert("Error al crear evento, intente mas tarde"));
			else {
				const data = await res.json();

				if (data.status === "OK") {
					store.dispatch(showAlert("Creado el evento exitosamente"));
					store.dispatch(closeEdit());
					localStorage.removeItem("temp");
				}
			}

		} catch(err) {
			console.error(err);
			store.dispatch(showAlert("Error al crear el Evento"))
		}
	}
	preview() {
		this.setState({
			preview: true
		});
	}
	render() {
		const {name, description, date, time, location, preview, church, image} = this.state;

		return <div>
			<div id="form">
				<div>
					<input style={{margin: "auto"}} type="text" name="name" value={name} onChange={this.handleInput} placeholder="Nombre del Evento"/>
				</div>
				<div>
					<textarea rows="6" cols="50" maxLength="255" name="description" value={description} onChange={this.handleInput} placeholder="Invitacion"/>
				</div>
				<div>
					<label htmlFor="date">Fecha: </label>
					<input type="date" name="date" value={date} onChange={this.handleInput}/>
				</div>
				<div>
					<label htmlFor="time">Hora: </label>
					<input type="time" name="time" value={time} onChange={this.handleInput}/>
				</div>
				<div>
					<label htmlFor="location">Zona:</label>
					<select name="location" value={location} onChange={this.handleInput}>
						<option default value="none">Ninguna</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div>
					<label htmlFor="church">Iglesia Receptora: </label>
					<input placeholder="Iglesia..." type="text" name="church" value={church} onChange={this.handleInput}/>
				</div>
				<div>
					<label htmlFor="image">Imagen:</label>
					<input style={{margin: "auto"}} type="file" name="image" onChange={this.handleImage}/>
				</div>
				{
					image &&
					<div>
						<img src={image} style={{width: "359px"}}/>
					</div>
				}
				<div>
					<button style={{width: "max-content", margin: "auto"}} onClick={this.preview}>Vista Previa</button>
				</div>
			</div>
			{preview &&
				<div>
					<div id="output">
						<Event data={this.state} active={this.state.ID}/>
					</div>
					<div id="mobile-output">
						<div>
							<Event data={this.state} active={this.state.ID}/>
						</div>
					</div>
					<button onClick={this.createEvent} id="upload">Subir Evento</button>
				</div>
			}
			<style jsx>{`
				#form {
					width: 100%;
				}
				#form > div {
					display: flex;
					justify-content: space-between;
					margin: 10px auto;
					width: 359px;
				}
				textarea {
					resize: none;
				}
				input[type="text"], textarea {
					border: solid gray 1px;
					border-radius: 10px;
					padding: 10px 20px;
				}
				input[type="time"],
				input[type="date"],
				select {
					width: 150px;
				}
				#output {
					height: 500px;
					position: relative;
				}
				#mobile-output {
					margin: 50px auto 0;
					height: 640px;
					width: 360px;
					position: relative;
					border: solid 1px black;
				}
				#mobile-output > div {
					height: 500px;
				}
				#upload {
					margin: auto;
				}
			`}</style>
			<style jsx global>{`
				#mobile-output #date {
					right: 5%;
				}
				#mobile-output #location {
					left: 5%;
				}
			`}</style>
		</div>
	}
}

ManageEvents.propTypes = {
	data: object
};

export default ManageEvents;
