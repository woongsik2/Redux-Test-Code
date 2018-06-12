import * as types from '../actions/ActionTypes';

const initialState = {
    text: "default"
}

function text(state = initialState, action) {
    console.log("action1", action)
    switch (action.type) {
        case types.SET_CHANGE_TEXT:
            state.text = action.text;
            console.log("text",state.text)
            return {
                text: state.text
            }
        default:
            return state;
    }
}

export default text;