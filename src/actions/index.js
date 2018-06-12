import * as types from './ActionTypes';


export const create = (color) => ({
    type: types.CREATE,
    color
});

export const remove = () => ({
    type: types.REMOVE
});

// increment(5)로 만들어진 액션은 index가 3인 카운터의 값을 1씩 올린다.
export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    index,
    color
});

export const setChangeText = (text) => (console.log("action",text),{
    type: types.SET_CHANGE_TEXT,
    text
});