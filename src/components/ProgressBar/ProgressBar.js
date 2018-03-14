import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = ({ trust, size }) => (
	<div className='ProgressBar' style={{height:`${trust}%`}}>
		{trust < 100 &&
			<div>
				<div className='wave'></div>
				<div className='bubble' style={{height:`${size}px`, width:`${size}px`}}></div>
				<div className='bubble' style={{height:`${size}px`, width:`${size}px`}}></div>
			</div>
		}
	</div>
);

ProgressBar.description = `
Used as a visualisation of the percentage of confirmations required that the transaction has received.
`;

ProgressBar.propTypes = {

	/** the percentage of confirmations required that the transaction has received */
	trust: PropTypes.number.isRequired,

	/** the random height and width values for the bubbles */
	size: PropTypes.number,
};

export default ProgressBar;
