import React, { Component } from 'react';
import './Experience.css';
import data from '../../data';
import '../../theme/global.css';

export class Experience extends Component {
	responsibilites = () => {
		let atts = [];

		for (let i = 0; i < data.experience[1].responsibilities.length; i++) {
			console.log(data.experience[1].responsibilities[i]);
			atts.push(<li>{data.experience[1].responsibilities[i].responsibility}</li>);
		}

		return atts;
	};

	render() {
		return (
			<div className="experienceContainer">
				<div className="job flex column v-top h-center">
					<h6 className="dateRange">
						{data.experience[1].start_date} - {data.experience[1].end_date}
					</h6>
					{data.experience[1].company_logo ? (
						<img
							src={data.experience[1].company_logo}
							alt={data.experience[1].company}
							className="companyLogo"
						/>
					) : (
						<h4>{data.experience[1].company}</h4>
					)}

					<h1 className="role">{data.experience[1].role}</h1>
				</div>
			</div>
		);
	}
}

export default Experience;
