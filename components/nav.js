import React from "react";
import Link from "next/link";

const links = [
	{ href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link prefetch href="/">
					<a>Home</a>
				</Link>
			</li>
			<ul>
				{links.map(({ key, href, label }) => (
					<li key={key}>
						<Link href={href}>
							<a>{label}</a>
						</Link>
					</li>
				))}
			</ul>
		</ul>
		<style global="true" jsx="true">{`
			@font-face {
				font-family: Roboto;
				src: url(/static/fonts/Roboto.ttf);
			}
			* {
				margin: 0;
				padding: 0;
				font-family: Roboto, Helvetica;
			}
			nav {
				text-align: center;
			}
			ul {
				display: flex;
				justify-content: space-between;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			a {
				color: #067df7;
				text-decoration: none;
				font-size: 13px;
			}
			.sub-titles {
				font-size: 60px;
				text-align: center;
				margin: 10px 0 50px;
			}
		`}</style>
	</nav>
);

export default Nav;
