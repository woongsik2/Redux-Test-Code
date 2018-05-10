/**
 * 컴포넌트에 연결시킬 상태와 액션함수를 정의할땐 각각 함수를 만들어줘야한다.
 * 상태를 연결시킬땐 state
 * 액션함수를 연결시킬땐 dispatch
 * 파라미터로 전달받는 함수를 만들어서 객체를 반환하면 props
 */

import InputText from '../components/InputText';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props로 연결
const mapStateToProps = (state) => ({
    text: state.textData.text
});

/**
 * 액션 생성자를 사용해 액션을 생성하고,
 * 해당 액션을 dispatch 하는 함수를 만든 후, props로 연결 해준다.
 */

const mapDispatchToProps = (dispatch) => ({
    onSetChangeText: (text) => dispatch(actions.setChangeText(text))
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.

const InputTextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputText);

export default InputTextContainer;