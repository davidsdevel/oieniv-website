import React, {Component} from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {string} from "prop-types";

class Helper extends Component {
	static async getInitialProps({query}) {
		const {title, content} = query;
		return { 
			title,
			content
		};
	}
	render() {
		return (
			<div>
				<Head title={this.props.title} />
				<Nav/>
				
				<h1>{this.props.title}</h1>
				<Footer/>
			</div>
		);
	}
}

Helper.propTypes = {
	title: string,
	content: string
};

export default Helper;
