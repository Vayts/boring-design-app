import { ADD_CATEGORY, SET_PHOTOS, SET_SEARCH } from '@store/photo/actionTypes';
import { isCategoryMatch } from '@helpers/photo.helper';

export function addCategoryAction(categoriesList, value) {
	return (dispatch) => {
		if (categoriesList.includes(value)) {
			const newState = categoriesList.filter((item) => item !== value);
			dispatch(addCategory(newState));
		} else {
			const newState = [...categoriesList, value];
			dispatch(addCategory(newState));
		}
	};
}

export function setPhotoAction(categories, value, setLoading, search) {
	return (dispatch) => {
		setLoading(true);
		setTimeout(() => {
			if (categories.length === 0 && search.trim() === '') {
				dispatch(setPhoto(value));
			} else {
				const newState = value.filter((item) => {
					if (item.categories.some(isCategoryMatch.bind(null, categories)) || item.categories.some(isCategoryMatch.bind(null, search.trim().split(' ')))) {
						return item;
					}
					return null;
				});
				dispatch(setPhoto(newState));
			}
			setLoading(false);
		}, 300);
	};
}

export function setPhoto(value) {
	return {
		type: SET_PHOTOS,
		payload: value,
	};
}

export function addCategory(value) {
	return {
		type: ADD_CATEGORY,
		payload: value,
	};
}

export function setSearch(value) {
	return {
		type: SET_SEARCH,
		payload: value,
	};
}
