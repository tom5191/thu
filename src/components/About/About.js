import React, { Component } from 'react';
import './About.min.css';

export class About extends Component {
	render() {
		return (
			<div className="about">
				<h1>Who am I?</h1>
				<p className="aboutInfo">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis metus nibh, eget porta
					augue sagittis nec. Vestibulum consectetur mauris non sollicitudin interdum. Fusce vel feugiat
					lectus. In auctor eget elit a facilisis. Quisque euismod venenatis risus, nec gravida augue lacinia
					sed. Aenean eget erat massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
					convallis metus nibh, eget porta augue sagittis nec. Vestibulum consectetur mauris non sollicitudin
					interdum. Fusce vel feugiat lectus. In auctor eget elit a facilisis. Quisque euismod venenatis
					risus, nec gravida augue lacinia sed. Aenean eget erat massa.
				</p>
			</div>
		);
	}
}

export default About;
