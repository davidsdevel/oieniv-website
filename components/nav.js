import React, {Component} from "react";
import Link from "next/link";

const links = [
	{ href: "/academia", label: "Academia de OIENIV" },
	{ href: "/lavozdeoieniv", label: "La Voz de OIENIV" },
	{ href: "/anjeiv", label: "Anjeiv" },
	{ href: "/andeiv", label: "Andeiv" },
	{ href: "/copaso", label: "Copaso" },
	{ href: "/pronani", label: "Pronani" },
	{ href: "/vemiv", label: "Vemiv" },
	{ href: "/primerosauxilios", label: "Primeros Auxilios" }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			scrollTop: 0,
			viewStaticMenu: false,
			viewFixedMenu: false
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.viewStaticMenu = this.viewStaticMenu.bind(this);
		this.viewFixedMenu = this.viewFixedMenu.bind(this);
	}
	componentDidMount() {
		this.setState({
			scrollTop:document.documentElement.scrollTop
		});
		document.body.onscroll = () => {
			this.setState({
				scrollTop:document.documentElement.scrollTop
			});
			if (this.state.scrollTop < 700)
				this.setState({viewFixedMenu: false});
		};
		document.body.onclick = () => this.setState({
			viewStaticMenu: false,
			viewFixedMenu: false
		});
	}
	viewStaticMenu() {
		this.setState({
			viewStaticMenu: !this.state.viewStaticMenu
		});
	}
	viewFixedMenu() {
		this.setState({
			viewFixedMenu: !this.state.viewFixedMenu
		});
	}
	render() {
		return (<nav>
			<ul className="menu" id="static">
				<li>
					<Link prefetch href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<a className="helper-organs" onClick={this.viewStaticMenu}>Organos Auxiliares</a>
					<ul className="helpers" style={{display: this.state.viewStaticMenu ? "block": "none" }}>
						{links.map(({ key, href, label }) => (
							<li key={key}>
								<Link prefetch href={href}>
									<a>{label}</a>
								</Link>
							</li>
						))}
					</ul>
					<Link href="/nosotros" prefetch>
						<a>Nosotros</a>
					</Link>
				</li>
			</ul>
			<ul id="mobile-static">
				<li>
					<img src="/static/images/menu.svg"/>
				</li>
			</ul>
			<ul className="menu" id="fixed" style={{top: this.state.scrollTop > 700 ? 0 : "-80px"}}>
				<li>
					<Link prefetch href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<a className="helper-organs" onClick={this.viewFixedMenu}>Organos Auxiliares</a>
					<ul className="helpers" style={{display: this.state.viewFixedMenu ? "block": "none" }}>
						{links.map(({ key, href, label }) => (
							<li key={key}>
								<Link prefetch href={href}>
									<a>{label}</a>
								</Link>
							</li>
						))}
					</ul>
					<Link href="/nosotros" prefetch>
						<a>Nosotros</a>
					</Link>
				</li>
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
					position: absolute;
					top: 0;
					width: 100%;
				}
				ul.menu {
					width: 50%;
					display: flex;
					padding: 20px 5%;
					justify-content: space-between;
		   			width: 90%;
				}
				li {
					display: flex;
					padding: 6px 8px;
					color: #fff;
				}
				ul.helpers {
					position: absolute;
					right: 10%;
					top: 71px;
					background: #f7f7f7;
					padding: 20px;
					border-radius: 20px;
					box-shadow: 0px 0px 5px black;
					margin-top: 10px;
				}
				ul.helpers a {
					text-align: center;
					color: gray;
					width: 100%;
				}
				ul.helpers a::before {
					content: "",
					background: red
				}
				a.helper-organs {
					margin-right: 50px;
					cursor: pointer;
				}
				a {
					color: #fff;
					font-size: 16px;
					text-decoration: none;
					font-weight: 600;
				}
				#fixed {
					background: #3c374e;
					z-index:1;
					position: fixed;
					transition: ease .6s;
				}
			`}</style>
		</nav>);
	}
}
export default Nav;
