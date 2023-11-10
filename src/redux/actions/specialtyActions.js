import axios from 'axios';

export const GET_SPECIALTIES = 'GET_SPECIALTIES'
const endpoint = 'http://localhost:3001'

export const getAllSpecialties = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/specialty/`)
            return dispatch({
                type: GET_SPECIALTIES,
                payload: data
            })
        } catch (error) {
            console.log('Error in getting all specialties', error);
        }
    }
}