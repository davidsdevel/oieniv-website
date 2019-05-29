const fs = require("fs");
const {promisify} = require("util");
const {join} = require("path");
const copyFile = promisify(fs.copyFile);
const helperBodies = require("./data/helperBodies.json");

/**

  provider: heroku
  env: D_PHASE=heroku
  api_key:
    secure: pMZoPeZAmiULB9/tBTWIjXdiepXhqeEUHenM2FbJcoZsgazLUm9nLL8BZL8LoBuo/u+SUk8MnQRmA9xVVn0wm0hduomRJOEnwXppfpdltknnEu8A8Pp8KqM8U6WZ/PoWhWsorPv9UzAZO+qkdx6oUhdoC8aGBj3g+CWfc2vfLqdv4hHjMlk/jzR7lBOi5rFHQXGupuDWAvkNdIIenYpYM8ReBTbnckM7glgVSM6e/NYA9i47ROmSFlEHzsKxBi+ZDdfw2CCiHmf2YepgLNCGXH+BHEX/ut4Yo72rZDQveNWFPHB+eN/TnEjMxbU5+RKwHYVoF06WXS09w2WPeEPO06n+lm6ko0IssN245pW6gegE7sWoIFx3/McoR7I1jDbDHdS4S+gyYmzJcQrM/kAoeAV6ce3tQEh1kMad0Jy6wEwh98nNp5/p5VACf4IbvSq8DFEyddVs3f2Syro6UTsrcThGdHzY2KAhAIl1amuPsVKJd8oZNTs+6hZ8S6sGvVYhvBQv5lYPlvRKBjF1Xdrj+g8CsxGrW0scsGbDghkCgm2Z+688lP8jAbyE/omc7A2DzjipYmnFpP62zJazjyxUIFcH5hRFajxRwzs1HVL7v0Edsl+fTdIsY1pbVe3yfN1OoWM0efLQCgklpwCmmHePqU+u8FWPuKdV9NDQTr3eKVY=
  app: oieniv

*/
module.exports = {
	exportPathMap: async function(defaultPathMap, {dev, dir, outDir}) {
		/*
		 * Funcion solo para generar los archivos estaticos
		 * No necesaria en el servidor
		 */
		const pathMap = {
			"/": { page: "/" },
			"/anjeiv": {
				page: "/helper",
				query: helperBodies.anjeiv
			}
		};
		
		if (dev)
			return pathMap;

		await copyFile(join(dir, "static", "404.html"), join(outDir, "404.html"));

		return pathMap;
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: "empty"
		};
		return config;
	}
};
