import React, { Component } from 'react';
import './Landing.min.css';
import Greetings from './landing_components/Greetings';
import Skills from './landing_components/Skills';
import Avatar from './landing_components/Avatar';
import DownArrow from './landing_components/DownArrow';
import { landing_atts } from '../../data.json';

export class Landing extends Component {
	componentDidMount() {
		landing_atts.forEach(att => {
			console.log(att);
		});
	}
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
