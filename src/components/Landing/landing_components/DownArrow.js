import React, { Fragment } from 'react';
import './lc.min.css';
import { ReactComponent as Down } from '../../../theme/icons/cheveron-down.svg';

export default function DownArrow() {
	return (
		<Fragment>
			<Down className="pulse" />
		</Fragment>
	);
}
