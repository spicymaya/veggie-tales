export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
export function fetchProducts() {
  let url = `${API_URL}/foods`;

  // console.log('url', url)
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(url, { method: "GET" })
      .then(handleErrors)
      .then(res => res.json())
      .then(products => {
        dispatch(fetchProductsSuccess(products));
        return products;
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchProductsFailure(error));
      });
  };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
