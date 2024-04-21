import { createSlice } from "@reduxjs/toolkit";
import { getAllDoctors, getDoctorById } from "./api/doctorApi";


export const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        doctors: [],
        doctorDetail: {},
    },
    reducers: {
        getDoctors: (state, action) => {
            state.doctors = action.payload;
        },
        setDoctorDetail: (state, action) => {
            state.doctorDetail = action.payload;
        }
    }
});


export const { getDoctors, setDoctorDetail } = doctorSlice.actions;



export const fetchAllDoctors = () => async (dispatch) => {
    try {
        const doctors = await getAllDoctors()
        dispatch(getDoctors(doctors))
    } catch (error) {
        throw error
    }
}

export const fetchDoctorById = (params) => async (dispatch) => {
    try {
        const doctor = await getDoctorById(params);
        dispatch(setDoctorDetail(doctor))
    } catch (error) {
        throw error
    }
}








export default doctorSlice.reducer;