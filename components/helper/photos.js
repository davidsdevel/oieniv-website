import React from "react";
import {array} from "prop-types";

const MapPhotos = ({images}) => images.map((e) => (<div key={e} className="helper-photo-container">
	<div style={{"backgroundImage": `url(${e})`}} alt="Test Photo" className="helper-photo">
		<div className="shadow"/>
	</div>
	<style jsx>{`
		.helper-photo {
			width: 100%;
			height: 100%;
			background-position: center;
			background-size: cover;
			cursor: pointer;
		}
		.helper-photo .shadow {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0,.5);
			opacity: 0;

			transition: ease .3s;
		}
		.helper-photo:hover .shadow {
			opacity: 1;
		}
		.helper-photo-container {
			display: inline-block;
    		width: 50%;
    		min-width: 160px;
    		margin: auto;
    		height: 170px;
    		max-width: 320px;
		}
		@media screen and (min-width: 760px) {
			.helper-photo-container {
				width: 25%;
			}
		}
	`}</style>
</div>));

const Photos = ({images}) => (
	<div id="main-photos-container">
		<MapPhotos images={images}/>
		<style jsx>{`
			#main-photos-container {
				margin: auto;
    			width: 95.05%;
    			display: block;
    			max-width: 1280px;
			}
		`}</style>
	</div>
);

MapPhotos.propTypes = {
	images: array
};

Photos.propTypes = {
	images: array
};

export default Photos;
