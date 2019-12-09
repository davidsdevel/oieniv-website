import React, {Component} from "react";
import Events from "./events";

class Dashboard extends Component {
	constructor() {
		super();

		this.state = {
			tab: "events"
		};
	}
	render() {
		const {tab} = this.state;
		
		let UI;

		if (tab === "events")
			UI = <Events/>;

		return <div>
			{UI}	
		</div>;
	}
}

export default Dashboard;
