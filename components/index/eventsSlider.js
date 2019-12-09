import React, {Component} from "react";
import {array} from "prop-types";
import Template from "./event";

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props,
			total: props.data.length,
			active: 0,
			test: [1,2,3,4,5,6]
		};

		this.timeout;

		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		/*setTimeout(() => {
			if (this.state.total - 1 === this.state.active) {
				this.setState({
					active: 0
				});
			} 
		}, 6000);*/
		setInterval(() => {
			var a = Object.assign([], this.state.test);

			a.push(a[0]);
			a.shift();

			this.setState({
				test: a
			});
		}, 1000);
	}
	render() {
		const {data} = this.state;

		return <div id="slider-container">
			<button id="prev">Ant.</button>
			{data.map((e, i) => <div key={e.name + i} className={this.state.active === i ? "active" : ""}>
				<Template data={e} />
			</div>)}
			<button id="next">Sig.</button>
			<style jsx>{`
				#slider-container {
					background: red;
					width: 100%;
					height: 500px;
					position: relative;
				}
				button {
					position: absolute;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					border: none;
					color: #3c374e;
					background: white;
					top: calc(50% - 25px);
				}
				button#next {
					right: 5%;
				}
				button#prev {
					z-index: 1;
					left: 5%;
				}
			`}</style>
		</div>;
	}
}

Slider.propTypes = {
	data: array
}

export default Slider;