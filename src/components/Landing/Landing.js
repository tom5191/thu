import React, { Component } from 'react';
import './Landing.min.css';
import Greetings from './landing_components/Greetings';
import Skills from './landing_components/Skills';
import Avatar from './landing_components/Avatar';
import DownArrow from './landing_components/DownArrow';

export class Landing extends Component {
	render() {
		return (
			<div className="landing flex column v-center h-center" style={{ height: window.innerHeight }}>
				<div className="mainContainer">
					<Avatar />
					<Greetings />
					<Skills />
				</div>
				<DownArrow />
			</div>
		);
	}
}

export default Landing;
