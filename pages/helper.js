import React, {Component} from "react";
import Head from "../components/head";
import Menu from "../components/nav";
import Footer from "../components/footer";

class Helper extends Component {
	static async getInitialProps({query, pathname}) {
		const {title, content} = query;
		return { 
			title,
			content
		}
	}
	render() {
		const {title} = this.props;
		return (
			<div>
				<Head title={title} />
				<Menu/>
				<h1>{title}</h1>
				<Footer/>
			</div>
		)
	}
}

export default Helper;
