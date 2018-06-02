import { combineReducers } from 'redux';

import NavigationLinksReducer from './NavigationLinksReducer';
import PortfolioReducer from './PortfolioReducer';
import WorkTypesReducer from './WorkTypesReducer';

const allReducers = combineReducers({
	navigationLinks: NavigationLinksReducer,
	projects: PortfolioReducer,
	categories: WorkTypesReducer
});

export default allReducers;