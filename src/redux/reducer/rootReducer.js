
import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';


const rootReducer = combineReducers({
  doctors: doctorReducer,
});

export default rootReducer;
