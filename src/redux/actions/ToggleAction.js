
export const TOGGLE_ON = 'TOGGLE_ON';



export const showChatbot = status => dispatch => {
    dispatch({
      type: TOGGLE_ON,
      payload: status
    });
};
