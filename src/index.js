import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
);
