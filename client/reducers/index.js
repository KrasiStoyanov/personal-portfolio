import { combineReducers } from 'redux';

import brandingAndIdentity from './brandingAndIdentityReducer';
import literature from './literatureReducer';
import webDesign from './webDesignReducer';

import navigationLinks from './navigationLinksReducer';
import navigationBarColorSchemeClass from './navigationBarColorSchemeClass';
import portfolioCategories from './portfolioCategoriesReducer';

const allReducers = combineReducers({
	brandingAndIdentity,
	literature,
	navigationBarColorSchemeClass,
	navigationLinks,
	portfolioCategories,
	webDesign,
});

export default allReducers;