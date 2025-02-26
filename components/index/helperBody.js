import React from "react";
import {string} from "prop-types";
import Link from "next/link";

const HelperBody = ({logoURL, name, content, url}) => (
	<div className="helper-body">
		<h4>{name}</h4>
		<Link href="/[helper]" as={url}>
			<a>
				{
					!logoURL ?
						<span>
							<b>{name}</b>
						</span>
						:
						<img src={logoURL} alt={`Organos Auxiliares - ${name} - OIENIV`}/>
				}
			</a>
		</Link>
		<p>{content}</p>
		<style jsx>{`
			a {
				height: 101px;
				display: flex;
				position: relative;
				flex-direction: column;
				justify-content: center;
				text-decoration: none;
				color: black;
				margin: 10px 0;
			}
			a span {
    			text-align: center;
			}
		`}</style>
	</div>
);

HelperBody.propTypes = {
	logoURL: string,
	name: string,
	content: string,
	url: string
};

export default HelperBody;
