import React, {Component} from "react";
import {array} from "prop-types";
import Template from "./event";

class Slider extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			...props,
			active: props.data[0].ID
		};

		this.timeout;
		this.timeout;

		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	componentDidMount() {
		this.interval = setInterval(() => this.next(true), 5000);
	}
	next(isInterval) {
		var data = Object.assign([], this.state.data);

		let fisrtChild = data[0];
		
		data.push(fisrtChild);
		data.shift();

		this.setState({
			active: fisrtChild.ID
		});

		this.timeout = setTimeout(() => {
			this.setState({
				data
			});
		}, 2000);

		if (!isInterval) {
			clearInterval(this.interval);
			clearTimeout(this.timeout);

			setTimeout(() => {
				this.interval = setInterval(() => this.next(true), 5000);
			}, 15000);
		}
	}
	prev() {
		let data = Object.assign([], this.state.data);

		let lastChild = data[data.length - 1];

		data.unshift(lastChild);
		data.pop();

		this.setState({
			active: lastChild.ID
		});

		this.timeout = setTimeout(() => {
			this.setState({
				data
			});
		}, 2000);
		
		clearInterval(this.interval);
		clearTimeout(this.timeout);

		setTimeout(() => {
			this.interval = setInterval(() => this.next(true), 5000);
		}, 15000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
		clearTimeout(this.timeout);
	}
	render() {
		const {data, active} = this.state;

		return <div id="slider-container">
			<button id="prev" onClick={this.prev}>
				<img src="/images/arrow.svg"/>
			</button>
			{data.map((e, i) => <div key={e.name + i}>
				<Template data={e} active={active}/>
			</div>)}
			<button id="next" onClick={this.next}>
				<img src="/images/arrow.svg"/>
			</button>
			<style jsx>{`
				#slider-container {
					background: black;
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
					background: none;
					top: calc(50% - 25px);
				}
				button:focus {
					outline: none;
				}
				button#next {
					right: 5%;
				}
				button#prev {
					z-index: 1;
					left: 5%;
				}
				button img {
					width: 100%;
				}
				button#prev img {
					transform: rotate(180deg);
				}
			`}</style>
		</div>;
	}
}

Slider.propTypes = {
	data: array
};

export default Slider;
