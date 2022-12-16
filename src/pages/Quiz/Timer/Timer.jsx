import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

export const Timer = ({ time, setTime, setTimeoutId, stage }) => {
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setTime(time - 1);
		}, 1000);
		setTimeoutId(timeOut);
	}, [time, stage]);
	
	return (
		<p>{moment.utc(time * 1000).format('mm:ss')}</p>
	);
};

Timer.propTypes = {
	time: PropTypes.number,
	setTime: PropTypes.func,
	setTimeoutId: PropTypes.func,
};
