import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './stores/index'
import Route from './routes/Route'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <Route />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
