import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctorSlice';
import specialtyReducer from './specialtySlice';


export const store = configureStore({
    reducer:{
        doctor: doctorReducer,
        specialty: specialtyReducer
    } 
});

