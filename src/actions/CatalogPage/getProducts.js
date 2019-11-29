export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

const getProducts = () => {
  return dispatch => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
      payload: {
        initialRequest: false,
        wait: true
      }
    });
    fetch(`data/catalog/products.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: {
            initialRequest: false,
            wait: false,
            products: data
          }
        });
      });
  };
};

export default getProducts;
