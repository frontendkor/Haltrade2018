import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ModalR from "./Modal/ModalR";
import NavR from "./Nav/NavR";
import getProductsR from "./CatalogPage/getProductsR";
import showCaseR from "./CatalogPage/showСaseR";
import recordProductDetailsR from "./CatalogPage/recordProductDetailsR";

export const rootReducer = combineReducers({
  Modal: ModalR,
  Nav: NavR,
  CatalogProducts: getProductsR,
  CatalogShowCase: showCaseR,
  productDetails: recordProductDetailsR,
  form: formReducer
});
