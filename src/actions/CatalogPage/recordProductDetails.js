export const RECORD_PRODUCT_DETAIL = "RECORD_PRODUCT_DETAIL";

const recordProductDetails = data => {
  return dispatch => {
    dispatch({
      type: RECORD_PRODUCT_DETAIL,
      payload: {
        img: data.img,
        title: data.title,
        weight: data.weight,
        weightPacking: data.weightPacking,
        storageTemperature: data.storageTemperature,
        shelfLife: data.shelfLife,
        packaging: data.packaging
      }
    });
  };
};

export default recordProductDetails;
