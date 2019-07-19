import React from 'react';
import thuAvatar from '../../../img/thu_avatar_200.jpg';
import './lc.min.css';

export default function Avatar() {
	return (
		<div className="avatarContainer">
			<img src={thuAvatar} alt="Thu Nguyen" className="mainAvatar" />
		</div>
	);
}
