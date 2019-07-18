import React, { Component } from 'react';
import './DesktopNav.css';

export class DesktopNav extends Component {
	render() {
		return (
			<nav className="toolbar__navigation">
				<button className="hvr-float-shadow">About Me</button>

				<button className="hvr-float-shadow">Experience</button>

				<button className="hvr-float-shadow">Travel Photography</button>

				<button className="hvr-float-shadow">Blog</button>
			</nav>
		);
	}
}

export default DesktopNav;
