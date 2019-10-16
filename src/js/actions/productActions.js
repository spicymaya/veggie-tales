import history from "../../history";

export const FETCH_PRODUCT_BEGIN = "FETCH_PRODUCT_BEGIN";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const fetchProductBegin = productId => ({
  type: FETCH_PRODUCT_BEGIN
});

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { product }
});

export const fetchProductFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: { error }
});

export function fetchProduct(id) {
  let url = `${API_URL}/foods/${id}`;
  // console.log('url', url)
  return dispatch => {
    dispatch(fetchProductBegin());
    return fetch(url, { method: "GET" })
      .then(handleErrors)
      .then(res => res.json())
      .then(product => {
        dispatch(fetchProductSuccess(product));
        console.log(product);
        return product;
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchProductFailure(error));
      });
  };
}

export const CREATE_PRODUCT_BEGIN = "CREATE_PRODUCT_BEGIN";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS,";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const createProductBegin = () => {
  console.log("fired");
  return {
    type: CREATE_PRODUCT_BEGIN,
    created: false
  };
};
export const createProductSuccess = product => {
  console.log("fired success");
  return {
    type: CREATE_PRODUCT_SUCCESS,
    created: true,
    payload: product
  };
};
export const createProductFailure = error => ({
  type: CREATE_PRODUCT_FAILURE,
  created: false,
  payload: { error }
});

export function createProduct(product) {
  console.log("name", product.name);
  let url = `${API_URL}/foods`;
  // debugger;
  return dispatch => {
    dispatch(createProductBegin());
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      credentials: "same-origin",
      body: JSON.stringify(product)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(product => {
        dispatch(createProductSuccess(product));
        // console.log("product", product);
        return product;
      })
      .catch(error => {
        console.log(error);
        return dispatch(createProductFailure(error));
      });
  };
}

export const DELETE_PRODUCT_BEGIN = "DELETE_PRODUCT_BEGIN";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const deleteProductBegin = () => ({
  type: DELETE_PRODUCT_BEGIN,
  deleted: false
});
export const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
  deleted: true
});
export const deleteProductFailure = error => ({
  type: DELETE_PRODUCT_FAILURE,
  deleted: false,
  payload: { error }
});
export const deleteProduct = productId => {
  let url = `${API_URL}/foods/${productId}`;
  return dispatch => {
    dispatch(deleteProductBegin());
    return fetch(url, { method: "DELETE" })
      .then(handleErrors)
      .then(dispatch(deleteProductSuccess()))
      .catch(error => {
        console.log(error);
        return dispatch(deleteProductFailure(error));
      });
  };
};
export const UPDATE_PRODUCT_BEGIN = "UPDATE_PRODUCT_BEGIN";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";
export const UPDATE_PRODUCT_ON_CHANGE = "UPDATE_PRODUCT_ON_CHANGE";

export const updateProductBegin = () => ({
  type: UPDATE_PRODUCT_BEGIN,
  updated: false
});
export const updateProductSuccess = product => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: { product }
});
export const updateProductFailure = error => ({
  type: UPDATE_PRODUCT_FAILURE,
  updated: false,
  payload: { error }
});

export const updateProduct = (productUpdateData, productId) => {
  let url = `${API_URL}/foods/${productId}`;
  // debugger;
  return dispatch => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify(productUpdateData) // body data type must match "Content-Type" header
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(productUpdateData => {
        dispatch(updateProductSuccess(productUpdateData));
        console.log("productUpdateData", productUpdateData);
        return productUpdateData;
      })
      .catch(error => {
        console.log(error);
        return dispatch(updateProductFailure(error));
      });
  };
};
// export const updateProductOnChange = product => {
//   return {
//     type: UPDATE_PRODUCT_ON_CHANGE,
//     payload: { product }
//   };
// };
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  console.log(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
