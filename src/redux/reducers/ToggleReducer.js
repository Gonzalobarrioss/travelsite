import { TOGGLE_ON } from "../actions/ToggleAction";

const initialState = {
    status: false,
};

function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ON:
            return { ...state, status: action.payload };
        default:
            return state;
    }
}
  
  export default toggleReducer;