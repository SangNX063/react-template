import { camelCase } from 'lodash';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

export interface IConfigStore {
  store: any;
  persistor: any;
}

export const configStore = (preloadedState: any = {}) => {
  const requireModule = require.context('../../src', true, /\.reducer.ts/); // extract [reducerName].reducer.ts files inside redux folder
  const reducers: any = {};
  requireModule.keys().forEach((fileName: any) => {
    try {
      const reducerName = camelCase(fileName?.match(/(\w{1,})(.reducer.ts)/)[1]);
      reducers[reducerName] = requireModule(fileName).default;
    } catch (error) {
      console.debug(`ERROR`, error);
    }
  });
  const rootReducers = combineReducers({
    ...reducers,
  });
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    blacklist: ['config'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  const middlewareEnhancer = applyMiddleware(thunk, logger);
  const store: any = createStore(persistedReducer, preloadedState, middlewareEnhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};
