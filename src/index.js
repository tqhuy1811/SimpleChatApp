import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import reducers from './component/reducers'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware()(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleWare(reducers)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
