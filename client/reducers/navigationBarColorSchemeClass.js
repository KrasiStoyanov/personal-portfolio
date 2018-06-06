import * as ActionTypes from '../constants/ActionTypes';

export default function reducer (state={
		className: 'navbar-dark'
	}, action) {
	switch (action.type) {
		case ActionTypes.CHANGE_NAVIGATION_BAR_COLOR_SCHEME_CLASS:
			state = {...state, className: action.className};
			break;
	}

	return state;
}