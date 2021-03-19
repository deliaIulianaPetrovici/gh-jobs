import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jobsReducer from './jobs/jobs.reducer';
import searchOptionsReducer from './searchOptions/searchOptions.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs']
  };

  const rootReducer=combineReducers({
    jobs:jobsReducer,
    searchOptions:searchOptionsReducer,
      
  });

  export default persistReducer(persistConfig, rootReducer)