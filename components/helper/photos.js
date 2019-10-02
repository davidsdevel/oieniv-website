import React from "react";

const PhotosURL = [
	"/static/images/test/0.jpg",
	"/static/images/test/1.jpg",
	"/static/images/test/2.jpg",
	"/static/images/test/3.jpg",
	"/static/images/test/4.jpg",
	"/static/images/test/5.jpg",
	"/static/images/test/6.jpg",
	"/static/images/test/7.jpg",
	"/static/images/test/8.jpg",
	"/static/images/test/9.jpg"
]

const MapPhotos = () => PhotosURL.map((e) => (<div key={e} className="helper-photo-container">
	<img src={e} alt="Test Photo" className="helper-photo"/>
	<style jsx>{`
		.helper-photo {
			height: 150px;
		}
		.helper-photo-container {
			display: inline-block;
    		width: min-content;
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
			}
		`}</style>
	</div>
);

export default Photos;
