import { RECORD_PRODUCT_DETAIL } from "../../actions/CatalogPage/recordProductDetails";

let initialState = {};

const recordProductDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_PRODUCT_DETAIL:
      return {
        ...state,
        img: action.payload.img,
        title: action.payload.title,
        weight: action.payload.weight,
        weightPacking: action.payload.weightPacking,
        storageTemperature: action.payload.storageTemperature,
        shelfLife: action.payload.shelfLife,
        packaging: action.payload.packaging
      };
    default:
      return state;
  }
};

export default recordProductDetailsR;
