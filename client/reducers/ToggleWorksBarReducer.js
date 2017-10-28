import * as ActionTypes from '../constants/ActionTypes';

export default function (state = null, action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_WORKS_BAR:
			if (action.payload === null) {
				action.payload = {
					toggleWorksBar: false
				};
			}

			let newState = Object.assign({}, state, {
				toggleWorksBar: !action.payload.toggleWorksBar
			});

			return newState;
			break;
	}

	return state;
}