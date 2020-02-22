import { POSTING_HOMIE_START, SUBMIT_HOMIE } from '../Actions'

const initialState = {
    cases: [
        {

        },
    ],
    isFetching : false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case POSTING_HOMIE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
            case SUBMIT_HOMIE: 
            return {
                ...state,
                cases: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};