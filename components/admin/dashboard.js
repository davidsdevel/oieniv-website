import React, {Component} from "react";
import Events from "./events";

class Dashboard extends Component {
	constructor() {
		super();

		this.state = {
			tab: "events"
		};

		this.changeTab = this.changeTab.bind(this);
	}
	changeTab(tab) {
		this.setState({
			tab
		});
	}
	render() {
		const {tab} = this.state;
		
		let UI;

		if (tab === "events")
			UI = <Events/>;

		return <div id="dashboard">
			<ul>
				<li onClick={() => this.changeTab("events")}>Eventos</li>
			</ul>
			<div id="dashboard-main">
				{UI}
			</div>
			<style jsx>{`
				#dashboard ul {
					width: 20%;
					height: 100%;
					position: fixed;
					background: black;
				}
				#dashboard ul li {
					background: #f7f7f7;
					width: 80%;
					margin: auto;
					padding: 20px;
					text-align: center;
				}
				#dashboard #dashboard-main {
					width: 80%;
					position: absolute;
					height: 100%;
					right: 0;
				}
			`}</style>
		</div>;
	}
}

export default Dashboard;
