import { FETCH_PRESCRIPTIONS_USERID } from '../../AppConstants';
const initialState = {
    prescription: null,
    prescriptions: []
}

export default function PrescriptionReducer(state = initialState, action) {
    if (action.type === 'prescription/add') {
        return {
            ...state, prescription: action.payload
        }
    }
    else if (action.type === FETCH_PRESCRIPTIONS_USERID) {
        console.log(action.payload)
        return {
            ...state, prescriptions: action.payload
        }
    } else {
        return state;
    }

}