import React, { Component } from 'react';
// import CounterContainer from '../containers/CounterContainer';
import Buttons from '../components/Buttons';
import CounterListContainer from '../containers/CounterListContainer';
import InputTextContainer from '../containers/InputTextContainer';

import {connect} from 'react-redux';
import * as actions from '../actions';

import {getRandomColor} from '../utils';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div>
                {/*<CounterContainer/>*/}
                <Buttons onCreate={onCreate} onRemove={onRemove}/>
                <CounterListContainer/>
                <InputTextContainer/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

export default connect(null, mapToDispatch)(App);