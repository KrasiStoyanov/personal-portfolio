import { combineReducers } from 'redux';

import navigationLinks from './navigationLinksReducer';
import brandingAndIdentity from './brandingAndIdentityReducer';
import portfolioCategories from './portfolioCategoriesReducer';
import navigationBarColorSchemeClass from './navigationBarColorSchemeClass';

const allReducers = combineReducers({
	navigationLinks,
	brandingAndIdentity,
	portfolioCategories,
	navigationBarColorSchemeClass
});

export default allReducers;