
import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';
import specialtyReducer from './specialtyReducer';


const rootReducer = combineReducers({
  doctors: doctorReducer,
  specialties: specialtyReducer
});

export default rootReducer;
