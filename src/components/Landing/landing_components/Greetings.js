import React from 'react';
import './lc.min.css';

export default function Greetings() {
	return (
		<div className="greetingsContainer">
			<h1>I'm Thu</h1>
			<span className="subGreetingContainer">
				<span className="tilda">~</span>
				<span className="subGreeting"> Like The Number </span>
				<span className="tilda">~</span>
			</span>
		</div>
	);
}
