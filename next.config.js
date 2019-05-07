const {resolve} = require("path");

module.exports = {
	exportPathMap: async function() {
		/*
		 * Funcion solo para generar los archivos estaticos
		 * No necesaria en el servidor
		 */
		return {
			"/": { page: "/" }
		};
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: "empty"
		};
		return config;
	}
};
