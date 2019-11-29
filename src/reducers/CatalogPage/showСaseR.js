import { SHOW_CASE } from "../../actions/CatalogPage/showСase";

let initialState = {
  data: []
};

const showCaseR = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CASE:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default showCaseR;
