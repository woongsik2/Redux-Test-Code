import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import InputTextContainer from '../containers/InputTextContainer';

class App extends Component {
    render() {
        return (
            <div>
                <CounterContainer/>
                <InputTextContainer/>
            </div>
        );
    }
}

export default App;