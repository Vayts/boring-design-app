import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {InputButton, InputElem, InputIcon, InputLabel, InputTitle} from './style';

export const TextField = ({ onChange, onBlur, fontSize, value, width, height, type, id, name, placeholder, error, validation, title }) => {
	
	return (
		<InputLabel>
			<InputTitle>{title}</InputTitle>
			<InputElem
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value || ''}
				width={width}
				height={height}
				type={type || 'text'}
				id={id}
				name={name}
				fontSize={fontSize}
				error={error}
				validation={validation}
			/>
		</InputLabel>
	);
};

TextField.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	fontSize: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.string,
	height: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string, 
	error: PropTypes.object, 
	validation: PropTypes.string,
};
