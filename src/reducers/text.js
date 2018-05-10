import * as types from '../actions/ActionTypes';

const initialState = {
    text: "default"
}

const text = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CHANGE_TEXT:
            state.text = action.text;
            return {
                text: state.text
            }
        default:
            return state;
    }
}

export default text;