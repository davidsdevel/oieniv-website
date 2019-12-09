import React from "react";

const President = () => (
	<div>
		<img src="/images/president.jpg" alt="" id="president-photo"/>
		<h4 className="sub-titles">David González</h4>
		<p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<hr/>
		<style jsx>{`
			hr {
				width: 80%;
				margin: auto;
				border: solid gray .5px;
			}
			#president-photo {
				width: 200px;
    			margin: 50px auto;
    			display: block;
    			border-radius: 50%;
			}
		`}</style>
	</div>
);

export default President;
