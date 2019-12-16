import React, {Component} from "react";
import store from "../store/reducer";
import {hideAlert} from "../store/actionCreators";

export default class Alert extends Component {
	constructor() {
		super();

		this.state = {
			show: false,
			message: ""
		};

		this.timeout;

		store.subscribe(() => {
			const {appAlert} = store.getState();
			const {show, message} = appAlert;

			if (this.state.show) {
				clearTimeout(this.timeout);

				this.setState({
					show: false
				});

				this.timeout = setTimeout(() => {
					this.setState({
						show,
						message
					});
				}, 600);

			} else {
				this.setState({
					show,
					message
				});
			}

			if (show) {
				this.hide();
			}
		});
	}
	hide() {
		this.timeout = setTimeout(() => {
			store.dispatch(hideAlert());
		}, 5000);
	}
	render() {
		const {message, show} = this.state;

		return <div id="alert-main">
			<div id="alert-container">
				<span>{message}</span>
			</div>
			<style jsx>{`
				#alert-main {
					width: 100%;
    				display: flex;
    				position: fixed;
    				z-index: 2;
    				top: ${show ? "50px" : "-200px"};

    				transition: ease .6s;
				}
				#alert-container {
    				max-width: 300px;
    				background: white;
    				padding: 25px;
    				border-radius: 10px;
    				margin: auto;
    				box-shadow: 0px 0px 8px gray;
				}
			`}</style>
		</div>;
	}
}
