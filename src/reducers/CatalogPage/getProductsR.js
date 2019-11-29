import { GET_PRODUCTS_REQUEST } from "../../actions/CatalogPage/getProducts";
import { GET_PRODUCTS_SUCCESS } from "../../actions/CatalogPage/getProducts";

const initialState = {
  initialRequest: true,
  wait: true,
  products: []
};

const catalogR = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        initialRequest: action.payload.initialRequest,
        wait: action.payload.wait
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        initialRequest: action.payload.initialRequest,
        wait: action.payload.wait,
        products: action.payload.products
      };
    default:
      return state;
  }
};

export default catalogR;
