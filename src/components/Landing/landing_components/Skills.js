import React, { Component } from 'react';
import { landing_atts } from '../../../data.json';
import './Skills.css';
import TextLoop from 'react-text-loop';
import glamorous from 'glamorous';

export default function Skills() {
	const CenteredText = glamorous.div({ textAlign: 'center', width: 300 });
	const skills = landing_atts.map(s => {
		return (
			<CenteredText>
				<p>{s}</p>
			</CenteredText>
		);
	});

	return (
		<div className="skills-view">
			<TextLoop delay={500}>{skills}</TextLoop>
		</div>
	);
}
