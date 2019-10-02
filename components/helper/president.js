import React from "react";

const President = () => (
	<div>
		<img src="/static/images/president.jpg" alt="" id="president-photo"/>
		<h4>David González</h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<style jsx>{`
			#president-photo {
				width: 300px;
    			margin: auto;
    			display: block;
			}
		`}</style>
	</div>
);

export default President;
