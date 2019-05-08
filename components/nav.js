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
		<style global jsx>{`
			@font-face {
				font-family: Roboto;
				src: url(/static/fonts/Roboto.ttf);
			}
			* {
				margin: 0;
				padding: 0;
				font-family: Roboto, Helvetica;
			}
			.sub-titles {
				color: #4c4c4c;
				font-size: 40px;
				font-weight: 300 !important;
				text-align: center;
				margin: 10px 0 50px;
			}
		`}</style>
		<style jsx>{`
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
		`}</style>
	</nav>
);

export default Nav;
