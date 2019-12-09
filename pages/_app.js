import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {object, func} from "prop-types";

const Layout = ({ Component, pageProps }) => (
	<div>
		{
			!pageProps.hideLayout &&
			<Nav error={pageProps.error} />
		}
		<Component {...pageProps} />
		{
			!pageProps.hideLayout &&
			<Footer />
		}
		<style global jsx>{`
			@font-face {
				font-family: Roboto;
				src: url(/fonts/Roboto.ttf);
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
	</div>
);

Layout.propTypes = {
	Component: func,
	pageProps: object
};

export default Layout;
