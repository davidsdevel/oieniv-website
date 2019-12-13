import React, {Component} from "react";
import Link from "next/link";
import {any} from "prop-types";

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
			viewFixedMenu: false,
			viewNav: false
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.viewStaticMenu = this.viewStaticMenu.bind(this);
		this.viewFixedMenu = this.viewFixedMenu.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	componentDidMount() {
		this.setState({
			scrollTop:document.documentElement.scrollTop
		});
		document.body.onscroll = () => {
			this.setState({
				scrollTop:document.documentElement.scrollTop
			});
			if (this.state.scrollTop < 500)
				this.setState({viewFixedMenu: false});
			else
				this.setState({viewStaticMenu: false});
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
	toggleMenu() {
		this.setState({
			viewNav: !this.state.viewNav
		});
	}
	render() {
		return (<nav>
			<ul className="menu" id="static">
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<a className="helper-organs" onClick={this.viewStaticMenu}>Organos Auxiliares</a>
					<ul className="helpers" style={{display: this.state.viewStaticMenu ? "block": "none" }}>
						{links.map(({ key, href, label }) => (
							<li key={key}>
								<Link href="/[helper]" as={href}>
									<a>{label}</a>
								</Link>
							</li>
						))}
					</ul>
					<Link href="/nosotros">
						<a>Nosotros</a>
					</Link>
				</li>
			</ul>
			<ul className="menu" id="fixed" style={{top: this.state.scrollTop > 700 ? 0 : "-80px"}}>
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<a className="helper-organs" onClick={this.viewFixedMenu}>Organos Auxiliares</a>
					<ul className="helpers" style={{display: this.state.viewFixedMenu ? "block": "none" }}>
						{links.map(({ key, href, label }) => (
							<li key={key}>
								<Link href="/[helper]" as={href}>
									<a>{label}</a>
								</Link>
							</li>
						))}
					</ul>
					<Link href="/nosotros">
						<a>Nosotros</a>
					</Link>
				</li>
			</ul>
			<div id="mobile-static" className="mobile-menu-bar">
				<img src="/images/menu.svg" onClick={this.toggleMenu}/>
			</div>
			<div id="mobile-fixed" className="mobile-menu-bar" style={{top: this.state.scrollTop > 700 ? 0 : "-80px"}}>
				<img src="/images/menu.svg" onClick={this.toggleMenu}/>
			</div>
			<div id="shadow" className={this.state.viewNav ? "shadowShow" : "shadowHide" } onClick={this.toggleMenu}></div>

			<ul style={{left: this.state.viewNav ? 0 : "-100%"}} id="mobile-menu">
				<li id="header-nav" style={{background: `#f7f7f7`, backgroundSize:"550px", backgroundPosition: "center"}}>
					<div>
						<h1>OIENIV</h1>
						<h2>Columna y Baluarte de la Verdad</h2>
					</div>
				</li>
				<li>
					<div 
					className="img-circle" 
					id="img-menu"/>
				</li>
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				{links.map(({ key, href, label }) => (
					<li key={key}>
						<Link href="/[helper]" as={href}>
							<a>{label}</a>
						</Link>
					</li>
				))}
				<li>
					<Link href="/nosotros">
						<a>Nosotros</a>
					</Link>
				</li>
			</ul>

			<style jsx>{`
				#shadow {
					position: fixed;
					width: 100%;
					height: 100%;
					right: 0;
					top: 0;
					z-index: 2;
					background: rgba(0, 0, 0, .6)
				}
				.mobile-menu-bar {
					height: 40px;
				}
				.mobile-menu-bar img {
					height: 80%;
					position: absolute;
					left: 5%;
					top: 10%;
				}
				#mobile-static {
					position: relative;
					z-index: 1;
				}
				#mobile-fixed {
					position: fixed;
					width: 100%;
					padding: 10px;
					background: #3c374e;

					transition: ease .3s;
				}
				#mobile-menu {
					text-align: center;
					height: 100%;
					top:0;
					width: 80%;
					max-width: 350px;
					background: white;
					transition: .5s ease;
						z-index: 2;
					position: fixed;
					box-shadow: 0 1px 6px black;
					overflow-y: scroll;
				}
				#mobile-menu li {
					cursor: pointer;
					list-style: none;
					display: block;
					padding: 20px 50px;
					background: white;
					margin: 10px auto;
					text-decoration: none;
				}
				#mobile-menu li:hover{
					background: black;
					color: rgba(255, 255, 255, .87);
					transition: .5s ease;
				}
				#mobile-menu li:hover > a{
					color: rgb(66,66,66);
					transition: .5s ease;
				}
					
				#mobile-menu li a {
					display: block;
					overflow: hidden;
					color: rgba(0,0,0,.87);
					text-decoration: none;
					width: 100%;
					margin: -20px -50px;
					padding: 20px 50px;
					height: 100%;
				}
				#mobile-menu li:nth-child(2){
					background: rgba(0, 0, 0, 0) ;
					cursor: default;
				}
				#mobile-menu li:nth-child(2) img {
					cursor: pointer;
				}
				nav {
					text-align: center;
					position: absolute;
					top: 0;
					width: 100%;
					z-index: 2;
				}
				ul.menu {
					width: 50%;
					display: none;
					padding: 20px 5%;
					justify-content: space-between;
					width: 90%;
				}
				li {
					display: flex;
					padding: 6px 8px;
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
					color: ${this.props.error ? "gray" : "#fff"};
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
				@media screen and (max-width: 480px) {
					#static, #fixed {
						display: none;
					}
					#mobile-static {
						padding: 10px;
						display: block;
					}
					#mobile-static li img {
						width: 50px;
						height: 50px;
					}
				}
				@media screen and (min-width: 760px) {
					ul.menu {
						display: flex;
					}
					.mobile-menu-bar {
						display: none;
					}
					.mobile-menu-bar img {
						display: none;
					}
				}
				.shadowShow{
					display: block;
					opacity: 1;
					animation: fade-show ease .6s forwards;
				}
				.shadowHide{
					display: none;
					opacity: 0;
					animation: fade-hide ease 1s forwards;
				}
				@keyframes fade-show {
					from{
						display: none;
						opacity: 0;
					}
					to{
						display: block;
						opacity: 1;
					}
				}
				@keyframes fade-hide {
					to{
						display: block;
						opacity: 1;
					}   
					from{
						display: none;
						opacity: 0;
					}
				}
			`}</style>
		</nav>);
	}
}

Nav.propTypes = {
	error: any
};

export default Nav;
