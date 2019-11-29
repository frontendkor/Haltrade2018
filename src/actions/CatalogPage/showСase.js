export const SHOW_CASE = "SHOW_CASE";

const showСase = data => {
  return dispatch => {
    dispatch({
      type: SHOW_CASE,
      payload: {
        data: data,
        class: ""
      }
    });
  };
};

export default showСase;
