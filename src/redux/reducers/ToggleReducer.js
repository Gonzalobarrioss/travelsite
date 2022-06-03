import { TOGGLE_STATUS } from "../actions/ToggleAction";

const initialState = {
    status: false,
};

function toggleReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_STATUS:
            return { ...state, status: action.payload };
        default:
            return state;
    }
}
  
  export default toggleReducer;