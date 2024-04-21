import { createSlice } from "@reduxjs/toolkit";
import { getAllSpecialties } from "./api/specialtyApi";


export const specialtySlice = createSlice({
    name: 'specialty',
    initialState: {
        specialties: []
    },
    reducers: {

        setSpecialties: (state, action) => {
            state.specialties = action.payload;
            console.log(state.specialties);
        }
    }
})

export const { setSpecialties } = specialtySlice.actions;


export const fetchAllSpecialties = () => async (dispatch) => {
    try {
        const specialties = await getAllSpecialties();
        dispatch(setSpecialties(specialties))
    } catch (error) {
        throw error
    }
}








export default specialtySlice.reducer;