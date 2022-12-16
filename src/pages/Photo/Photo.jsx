import React, { useEffect, useState } from 'react';
import { Header } from '@src/pages/Photo/Header/Header';
import { PhotoContent, PhotoMain } from '@src/pages/Photo/style';
import { CategoriesAside } from '@src/pages/Photo/CategoriesAside/CategoriesAside';
import { PHOTO } from '@constants/photo';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoAction } from '@store/photo/actions';
import { PhotoList } from '@src/pages/Photo/PhotoList/PhotoList';
import { getCategories, getSearch } from '@store/photo/selectors';
import { Loader } from '@src/components/Loader/Loader';

export const Photo = () => {
	const dispatch = useDispatch();
	const categories = useSelector(getCategories);
	const search = useSelector(getSearch);
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		dispatch(setPhotoAction(categories, PHOTO, setLoading, search));
	}, [categories, search]);
	
	return (
		<>
			<Header/>
			<PhotoContent>
				<CategoriesAside disabled={isLoading}/>
				<PhotoMain>
					{isLoading ? <Loader size={80}/> : <PhotoList photoPerPage={4}/>}
				</PhotoMain>
			</PhotoContent>
		</>
	);
};

Photo.propTypes = {};
