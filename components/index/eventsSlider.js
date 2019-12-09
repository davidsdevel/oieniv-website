import React, {Component} from "react";
import {array} from "prop-types";
import Template from "./event";

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props,
			total: props.data.lenght
		};
	}
	render() {
		const {data} = this.state;

		return <div>
			{data.map((e, i) => <div key={e.name + i}>
				<Template data={e} />
			</div>)}
		</div>;
	}
}

Slider.propTypes = {
	data: array
}

export default Slider;