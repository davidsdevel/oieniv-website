import React from "react";

const PhotosURL = [
	"/images/test/0.jpg",
	"/images/test/1.jpg",
	"/images/test/2.jpg",
	"/images/test/3.jpg",
	"/images/test/4.jpg",
	"/images/test/5.jpg",
	"/images/test/6.jpg",
	"/images/test/7.jpg",
	"/images/test/8.jpg",
	"/images/test/9.jpg"
];

const MapPhotos = () => PhotosURL.map((e) => (<div key={e} className="helper-photo-container">
	<div style={{"backgroundImage": `url(${e})`}} alt="Test Photo" className="helper-photo"/>
	<style jsx>{`
		.helper-photo {
			width: 100%;
			height: 100%;
			background-position: center;
			background-size: cover;
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
const Photos = () => (
	<div id="main-photos-container">
		<MapPhotos/>
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

export default Photos;
