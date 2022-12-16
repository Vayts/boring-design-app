import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { SearchIcon, SearchInput, SearchWrapper } from '@src/components/Search/style';
import {useDispatch} from "react-redux";

export const Search = ({action, value}) => {
	const dispatch = useDispatch();
	
	const changeHandler = (e) => {
		dispatch(action(e.target.value));
	};
	
	return (
		<SearchWrapper>
			<SearchInput value={value} onChange={(e) => changeHandler(e)}/>
			<SearchIcon className='icon-search'/>
		</SearchWrapper>
	);
};

Search.propTypes = {};
