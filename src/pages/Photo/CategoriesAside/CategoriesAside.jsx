import React from 'react';
import PropTypes from 'prop-types';
import {
	CategoriesItem,
	CategoriesList, CategoriesResult,
	CategoriesTitle,
	CategoriesWrapper,
} from '@src/pages/Photo/CategoriesAside/style';
import { CATEGORIES } from '@constants/category';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction } from '@store/photo/actions';
import {getCategories, getPhotos} from '@store/photo/selectors';

export const CategoriesAside = ({ disabled }) => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const photoList = useSelector(getPhotos);
	
	const setCategory = (e) => {
		if (!disabled) {
			dispatch(addCategoryAction(categories, e.target.dataset.value));
		}
	};
	
	return (
		<CategoriesWrapper>
			<CategoriesTitle>Категорії</CategoriesTitle>
			<CategoriesList>
				{CATEGORIES.map((item) => {
					return (
						<CategoriesItem key={item} isActive={categories.includes(item)} onClick={(e) => setCategory(e)} data-value={item}>{`#${item}`}</CategoriesItem>
					);
				})}
			</CategoriesList>
			<CategoriesResult>{`Results found: ${photoList.length}`}</CategoriesResult>
		</CategoriesWrapper>
	);
};

CategoriesAside.propTypes = {
	disabled: PropTypes.bool,
};
