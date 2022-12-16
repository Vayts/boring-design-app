import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { converterReducer } from '@store/converter/reducer';
import { photoReducer } from '@store/photo/reducer';

export const rootReducer = combineReducers({
	converter: converterReducer,
	photo: photoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	// eslint-disable-next-line no-console
	console.log(store.getState());
});
