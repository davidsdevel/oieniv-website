import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Alert from "../components/alert";
import {object, func} from "prop-types";

const Layout = ({ Component, pageProps }) => {
	return <div>
		{
			!pageProps.hideLayout &&
			<Nav error={pageProps.error} />
		}
		<Alert/>
		<Component {...pageProps} />
		{
			!pageProps.hideLayout &&
			<Footer />
		}
		<style global jsx>{`
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
	</div>;
};

Layout.propTypes = {
	Component: func,
	pageProps: object
};

export default Layout;
