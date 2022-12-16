import React from 'react';
import PropTypes from 'prop-types';
import {HeaderContent, HeaderLogo, HeaderLogoWrapper, HeaderWrapper} from '@src/pages/Photo/Header/style';
import { Search } from '@src/components/Search/Search';
import { setSearch } from '@store/photo/actions';
import { useSelector } from 'react-redux';
import { getSearch } from '@store/photo/selectors';

export const Header = () => {
	const search = useSelector(getSearch);
	
	return (
		<HeaderWrapper>
			<HeaderContent>
				<HeaderLogoWrapper>
					<HeaderLogo>
						<img src="../assets/img/logo.svg" alt="logo letter p"/>
					</HeaderLogo>
					<p>PhotoGramm</p>
				</HeaderLogoWrapper>
				<Search action={setSearch} value={search}/>
			</HeaderContent>
		</HeaderWrapper>
	);
};

Header.propTypes = {};
