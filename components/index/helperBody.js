import React from "react";
import {string} from "prop-types";
import Link from "next/link";

const HelperBody = ({logoURL, name, content, url}) => (
	<div className="helper-body">
		<h4>{name}</h4>
		<Link href="/[helper]" as={url}>
			<a>
				<img src={logoURL} alt={`Organos Auxiliares - ${name} - OIENIV`}/>
			</a>
		</Link>
		<p>{content}</p>
	</div>
);

HelperBody.propTypes = {
	logoURL: string,
	name: string,
	content: string,
	url: string
};

export default HelperBody;
