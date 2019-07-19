import React, { Component } from 'react';
import './Toolbar.min.css';
import DesktopNav from '../Nav/Desktop/DesktopNav';

export class Toolbar extends Component {
	render() {
		return (
			<header className="toolbar flex row h-right">
				<DesktopNav />
			</header>
		);
	}
}

export default Toolbar;
