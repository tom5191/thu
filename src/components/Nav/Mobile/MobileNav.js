import React, { Component } from 'react';
import './../../Toolbar/Toolbar';
import { ReactComponent as CloseIcon } from '../../../theme/icons/close.svg';

export class MobileNav extends Component {
	render() {
		return (
			<div className="menu flex column v-top" style={{ height: window.innerHeight }}>
				<button onClick={this.props.toggle}>
					<CloseIcon className="closeIcon" />
				</button>
				<button>About Me</button>

				<button>Experience</button>

				<button>Travel Photography</button>

				<button>Blog</button>
			</div>
		);
	}
}

export default MobileNav;
