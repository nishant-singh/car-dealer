import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './components/app/App';
import storeConfig from './configureStore';
import sagas from './sagas/merchant';
import registerServiceWorker from './registerServiceWorker';

const store = storeConfig.configureStore();

storeConfig.middleware.run(sagas);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
