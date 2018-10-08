import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/merchant';
import createSagaMiddleware from "redux-saga";

const middleware = createSagaMiddleware();
const configureStore = (preloadedState) => {
  const enhancers = [ applyMiddleware(middleware) ];
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducer,
    preloadedState,
    compose(
      ...enhancers
    )
  );
};

export default { configureStore, middleware };
