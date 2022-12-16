import { ADD_CATEGORY, SET_PHOTOS, SET_SEARCH } from '@store/photo/actionTypes';

const initialState = {
	photoList: [],
	categoriesList: [],
	search: '',
};

export const photoReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_CATEGORY: 
		return { 
			...state, 
			categoriesList: action.payload, 
		};
	case SET_PHOTOS:
		return {
			...state, 
			photoList: action.payload,
		};
	case SET_SEARCH:
		return {
			...state,
			search: action.payload,
		};
	default:
		return state;
	}
};
