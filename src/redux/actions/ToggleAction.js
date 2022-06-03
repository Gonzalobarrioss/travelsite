
export const TOGGLE_STATUS = 'TOGGLE_STATUS';



export const toggle = status => dispatch => {
    dispatch({
      type: TOGGLE_STATUS,
      payload: status
    });
};
