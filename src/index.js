import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import '@vkontakte/vkui/dist/vkui.css';

import { Provider } from 'react-redux';
import rootReducer from './store';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));