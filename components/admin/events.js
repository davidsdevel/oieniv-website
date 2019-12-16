import React, {Component} from "react";
import ManageEvents from "./manageEvents";
import store from "../../store/reducer";
import {newEvent, editEvent, closeEdit, showAlert} from "../../store/actionCreators";

class Events extends Component {
	constructor() {
		super();

		this.state = {
			events: [],
			editting: false,
			editData: {}
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.getEvents = this.getEvents.bind(this);

		store.subscribe(() => {
			let storeData = store.getState().adminEvents;

			this.setState({
				editting: storeData.editting,
				editData: {
					...storeData
				}
			});
			this.getEvents();
		});
	}
	componentDidMount() {
		this.getEvents();
	}
	async getEvents() {
		try {
			const res = await fetch("/data/index");
			const events = await res.json();
			
			this.setState({
				events
			});
		} catch(err) {
			throw new Error(err);
		}
	}
	async deleteEvent(ID) {
		try {
			const res = await fetch("/api/admin/delete-event", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					ID
				})
			});
			if (res.status >= 500)
				store.dispatch(showAlert("Error al eliminar el evento"));
			else {
				const data = await res.json();
				if (data.status === "ok") {
					store.dispatch(showAlert("Eliminado con exito"));
					this.getEvents();
				}
			}
		} catch(err) {
			console.error(err);
		}
	}
	editEvent(index) {
		store.dispatch(editEvent(this.state.events[index]));
	}
	newEvent() {
		store.dispatch(newEvent());
	}
	cancelEvent() {
		if (confirm("¿Desea cerrar sin publicar el evento?")) {
			store.dispatch(closeEdit());
			localStorage.removeItem("temp");
		}
	}
	render() {
		const {events, editting, editData} = this.state;

		return <div id="main-events">
			<h1>Eventos</h1>
			{
				editting ?
					<button id="add" onClick={this.cancelEvent}>Cerrar</button>
					:
					<button id="close" onClick={this.newEvent}>Crear</button>
			}
			
			{editting ?
				<ManageEvents data={editData}/>
				:
				<div id="events-container">
					{events.length > 0 ? events.map(({ID, name, description, image}, i) => (<div key={name+ID} style={{backgroundImage: `url(${image})`}} className="event">
						<div className="shadow">
							<h3>{name}</h3>
							<p>{description}</p>
							<button onClick={() => this.deleteEvent(ID)}>Eliminar</button>
							<button onClick={() => this.editEvent(i)}>Editar</button>
						</div>
					</div>))
						:
						<div id="no-events">
							<span>No Hay Eventos</span>
							<button onClick={this.newEvent}>Crear</button>	
						</div>
					}
				</div>
			}
			<style jsx>{`
				#main-events {
					position: absolute;
					height: 100%;
					width: 100%;
				}
				#main-events h1 {
					text-align: center;
					margin: 25px 0;
				}
				:global(#main-events button) {
					padding: 15px 25px;
					border: none;
					color: white;
					background: rgba(0,0,0,.8);
					border-radius: 10px;
					margin: 0 0 0 5%;
					cursor: pointer;

					transition: ease .3s;
				}
				#main-events button:hover {
					background: white;
					color: black;
				}
				#main-events button:focus {
					outline: none;
				}
				#no-events {
					padding: 150px 0 0 0;
					width: 100%;
					text-align: center;
				}
				#no-events button {
					display: block;
					margin: 50px auto;
				}
				#events-container {
					position: absolute;
					bottom: 0;
					height: calc(100% - 150px);
					width: 100%;
					overflow-y: scroll;
				}
			`}</style>
			<style jsx global>{`
				.event {
					background-position: center;
					background-size: cover;
					color: white;
					position: relative;
				}
				.shadow {
					overflow: hidden;
					background: rgba(0,0,0,.5);
					padding: 50px;
					width: calc(100% - 100px);
					height: calc(100% - 100px);
				}
				.shadow h3 {
					text-align: center;
				}
				.shadow h3, .shadow p {
					margin: 20px auto;
				}
				.shadow button {
					float: right;
				}
			`}</style>
		</div>;
	}
}

export default Events;
