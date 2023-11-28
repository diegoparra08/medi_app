import { GET_DOCTORS, GET_DOCTOR_BY_ID } from '../actions/doctorActions'

const initialState = {
    doctors: [],
    doctorDetail: {},
};

const doctorReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DOCTORS:

            return {
                ...state,
                doctors: action.payload,
            }

        case GET_DOCTOR_BY_ID:
            return {
                ...state,
                doctorDetail: action.payload,
            }

        default:
            return {
                ...state
            }
    }
};


export default doctorReducer;