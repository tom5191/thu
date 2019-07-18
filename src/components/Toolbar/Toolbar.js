import React, { Component } from 'react';
import './Toolbar.css';
import { ReactComponent as MenuIcon } from '../../theme/icons/dots-horizontal-triple.svg';
import { Keyframes, animated } from 'react-spring/renderprops';
import MobileNav from '../Nav/Mobile/MobileNav';
import DesktopNav from '../Nav/Desktop/DesktopNav';

const navLocationOffScreen = window.innerWidth;
const navLocationOnScreen = window.innerWidth - 326;
const Sidebar = Keyframes.Spring({
	peek: { x: navLocationOffScreen, delay: 800 },
	open: { delay: 0, x: navLocationOnScreen },
	close: { delay: 0, x: navLocationOffScreen },
});

export class Toolbar extends Component {
	state = { open: false };
	toggle = () => this.setState(state => ({ open: !state.open }));
	mobileNav_width = React.createRef();
	componentDidMount() {}

	render() {
		const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close';
		const displayNav =
			window.innerWidth > 768 ? (
				<DesktopNav />
			) : (
				<Sidebar native state={state}>
					{({ x }) => (
						<animated.div style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
							<MobileNav toggle={this.toggle} />
						</animated.div>
					)}
				</Sidebar>
			);

		return (
			<header className="toolbar flex row h-right">
				<nav className="toolbar__mobileNav">
					<button onClick={this.toggle}>
						{this.state.open ? <div /> : <MenuIcon className="menuIcon" />}
					</button>
					{displayNav}
				</nav>
			</header>
		);
	}
}

export default Toolbar;
