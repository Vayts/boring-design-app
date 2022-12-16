import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { clearResult } from '@store/converter/actions';
import {
	DropdownButton,
	DropdownContent, DropdownItem, DropdownTitle,
	DropdownWrapper,
} from './style';

export const Select = ({ arr, setFieldValue, name, selectValue, placeholder, title, setState }) => {
	const wrapperRef = useRef(null);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	
	const closeOnOutsideClick = () => {
		setOpen(false);
	};
	useOutsideClick(wrapperRef, closeOnOutsideClick);
	
	const openDropDown = () => {
		setOpen(!open);
	};
	
	const clickHandler = (el) => {
		return () => {
			setFieldValue(name, el);
			setOpen(null);
			dispatch(clearResult());
			
			if (setState) {
				setState(el);
			}
		};
	};
	
	return (
		<DropdownWrapper ref={wrapperRef}>
			<DropdownTitle>{title}</DropdownTitle>
			<DropdownButton onClick={openDropDown} colored={!!selectValue} open={open}>
				<img src={`./assets/img/${selectValue.toLowerCase()}.png`} alt='flag'/>
				{selectValue || placeholder}
				<i className={open ? 'icon-arrow-up' : 'icon-arrow-down'}/>
			</DropdownButton>
			<DropdownContent>
				{open
					? arr.map((el) => {
						if (el.value !== selectValue) {
							return (
								<DropdownItem
									key={uuidv4()}
									onClick={clickHandler(el)}
								>
									<img src={`./assets/img/${el.icon}.png`} alt='flag'/>
									{el.value}
								</DropdownItem>
							);
						}
					})
					: null}
			</DropdownContent>
		</DropdownWrapper>
	);
};

Select.propTypes = {
	arr: PropTypes.array,
	selectValue: PropTypes.string,
	setFieldValue: PropTypes.func,
	placeholder: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	setState: PropTypes.func,
};
