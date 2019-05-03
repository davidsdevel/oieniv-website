const {resolve} = require("path");

module.exports = {
	exportPathMap: async function() {
		/*
		 * Funcion solo para generar los archivos estaticos
		 * No necesaria en el servidor
		 */
		return {
			"/": { page: "/" }
		}
	},
	webpack: config => {
		const alias = config.resolve.alias;

		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		}

		/*
		 * Añadido alias para los componentes
		 * Ejemplo: import ComponentName from "Component/nav";
		 */
		config.resolve.alias = {
			...alias,
			Components: resolve("./components")
		}
		return config;
	}
}
