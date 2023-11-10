import { GET_DOCTORS } from '../actions/doctorActions'

const initialState = {
    doctors: [],
};

const doctorReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DOCTORS:

            return {
                ...state,
                doctors: action.payload,
            }

        default:
            return {
                ...state
            }
    }
};


export default doctorReducer;