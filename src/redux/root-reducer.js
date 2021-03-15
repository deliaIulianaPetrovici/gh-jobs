import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jobsReducer from './jobs/jobs.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs']
  };

  const rootReducer=combineReducers({
    jobs:jobsReducer,
      
  });

  export default persistReducer(persistConfig, rootReducer)