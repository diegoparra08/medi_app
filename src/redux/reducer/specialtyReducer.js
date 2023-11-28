import { GET_SPECIALTIES } from '../actions/specialtyActions';

const initialState = {
    specialties: [],
};

const specialtyReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SPECIALTIES:

            return {
                ...state,
                specialties: action.payload,
            }

        default:
            return {
                ...state
            }
    }
};


export default specialtyReducer;