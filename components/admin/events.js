import React, {Component} from "react";

class Events extends Component {
	constructor() {
		super();
		
		this.state = {
			name: "",
			church: "",
			location: "",
			date: "",
			time: ""
		};

		this.handleInput = this.handleInput.bind(this);
	}
	handleInput({target}) {
		const {name, type, value} = target;

		this.setState({
			[name]: value
		});
	}
	render() {
		const {output} = this.state;

		let Preview = () => null;

		if (output)
			Preview = () => (<div>
				<span>Vista Previa</span>
				<output>
					{output}
				</output>
			</div>);

		return <div>
			<span>Eventos</span>
			<button>Crear</button>
			
			<label htmlFor="name">Nombre del Evento</label>
			<input type="text" name="name" placeholder="Nombre del Evento"/>
			<label htmlFor="church">Iglesia Receptora</label>
			<input type="text" name="church" placeholder="Iglesia"/>
			<label htmlFor="location">Zona</label>
			<select name="location">
				<option>Zona 1</option>
				<option>Zona 2</option>
				<option>Zona 3</option>
				<option>Zona 4</option>
				<option>Zona 5</option>
			</select>
			<label htmlFor="date">Fecha</label>
			<input type="date" name="date"/>
			<label htmlFor="time">Hora</label>
			<input type="time" name="time"/>
			<label htmlFor="">Imagen de fondo</label>
			<input type="file" name="image"/>
			<Preview/>
			<style jsx>{`
				input, select {
					display: block;
				}
			`}</style>
		</div>;
	}
}

export default Events;
