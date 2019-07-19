import React from 'react';
import './DesktopNav.min.css';

export default function DesktopNav() {
	return (
		<nav className="toolbar__navigation">
			<button className="hvr-float-shadow">About Me</button>

			<button className="hvr-float-shadow">Experience</button>

			<button className="hvr-float-shadow">Travel Photography</button>

			<button className="hvr-float-shadow">Blog</button>
		</nav>
	);
}
