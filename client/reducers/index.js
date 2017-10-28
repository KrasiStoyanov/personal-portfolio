import { combineReducers } from 'redux';
import PortfolioReducer from './PortfolioReducer';
import WorkTypesReducer from './WorkTypesReducer';
import ToggleWorksBarReducer from './ToggleWorksBarReducer';

const allReducers = combineReducers({
	projects: PortfolioReducer,
	categories: WorkTypesReducer,
	toggleWorksBar: ToggleWorksBarReducer
});

export default allReducers;