import * as ActionTypes from '../constants/ActionTypes';

export const toggleWorksBar = (toggle) => ({
    type: ActionTypes.TOGGLE_WORKS_BAR,
    payload: toggle
});