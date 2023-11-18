import axios from 'axios';

export const GET_DOCTORS = 'GET_DOCTORS'
const endpoint = 'http://localhost:3001'

export const getAllDoctors = () => {
    return async (dispatch) => {
    try{
      const { data } = await axios.get(`${endpoint}/doctor/`)
      return dispatch({
        type: GET_DOCTORS,
        payload: data
      })
    } catch(error){
        console.log('Error in getting all doctors', error);
    }
  }
};

