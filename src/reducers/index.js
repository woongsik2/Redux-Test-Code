import * as types from '../actions/ActionTypes';
// import color from './color';
// import number from './number';
import text from './text';

import { combineReducers } from 'redux';

// 초기 상태 정의
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, action) {
    console.log("!!!!!!!!!!!!!!!!")
    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        // slice를 이용해 맨 마지막 카운터를 제거한다.
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            }
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state;
    }
}

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1
//             }
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1
//             }
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             }
//         default:
//             return state;
//     }
// }

// const reducers = combineReducers({
//     // numberData: number,
//     // colorData: color,
//     textData: text
// });

export default counter;
// export default reducers;