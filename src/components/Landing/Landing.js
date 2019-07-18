import React, { Component } from 'react';
import './Landing.css';
import Toolbar from '../Toolbar/Toolbar';
import thuAvatar from '../../img/thu_avatar_300.jpg';

export class Landing extends Component {
	render() {
		return (
			<div className="landing flex column v-center h-center" style={{ height: window.innerHeight }}>
				<Toolbar />
				<div className="mainContainer">
					<div className="avatarContainer">
						<img src={thuAvatar} alt="Thu Nguyen" className="mainAvatar" />
					</div>
					<div className="greetingsContainer">
						<h1>I'm Thu</h1>
						<span className="subGreetingContainer">
							<span className="tilda">~</span>
							<span className="subGreeting"> Like The Number </span>
							<span className="tilda">~</span>
						</span>
					</div>
					<div className="skillsContainer">
						<h1>Marketing Specialist</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
