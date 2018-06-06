import * as ActionTypes from '../constants/ActionTypes';

export function changeNavigationBarColorSchemeClass(className) {
	return {
		type: ActionTypes.CHANGE_NAVIGATION_BAR_COLOR_SCHEME_CLASS,
		className: className
	}
}