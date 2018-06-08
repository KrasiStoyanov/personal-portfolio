import { combineReducers } from 'redux';

import brandingAndIdentity from './brandingAndIdentityReducer';
import webDesign from './webDesignReducer';

import navigationLinks from './navigationLinksReducer';
import portfolioCategories from './portfolioCategoriesReducer';
import navigationBarColorSchemeClass from './navigationBarColorSchemeClass';

const allReducers = combineReducers({
	brandingAndIdentity,
	webDesign,
	navigationLinks,
	portfolioCategories,
	navigationBarColorSchemeClass
});

export default allReducers;