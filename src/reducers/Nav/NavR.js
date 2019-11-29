import { SHOW_NAV } from "../../actions/Nav/showNav";

let getValue = () => {
  let bool;
  window.innerWidth <= 980 ? (bool = false) : (bool = true);
  return bool;
};

const initialState = {
  show: getValue()
};

const NavR = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return {
        ...state,
        show: action.payload.show
      };
    default:
      return state;
  }
};

export default NavR;
