import React, { Component } from 'react';
import ImgGallery from '../Gallery/ImgGallery';

export class Travel extends Component {
	render() {
		return (
			<div>
				<h2>I haven't been everywhere, but it's on my list.</h2>
				<ImgGallery />;
			</div>
		);
	}
}

export default Travel;
