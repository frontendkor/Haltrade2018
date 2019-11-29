export const SHOW_NAV = "SHOW_NAV";

const showNav = show => {
  return dispatch => {
    dispatch({
      type: SHOW_NAV,
      payload: {
        show: show
      }
    });
  };
};

export default showNav;
