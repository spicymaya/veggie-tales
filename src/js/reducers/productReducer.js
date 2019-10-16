import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_ON_CHANGE
} from "../actions/productActions";

const initialState = {
  data: [],
  formControls: {
    name: "",
    type: "",
    region: "",
    image_url: "",
    rating: 1
  },
  loading: false,
  error: null
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCT_SUCCESS:
      // console.log("action.payload", action.payload);
      return {
        ...state,
        data: action.payload.product
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CREATE_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true
      };
    case CREATE_PRODUCT_SUCCESS:
      console.log("action.payload", action);
      return {
        ...state,
        loading: false,
        data: action.payload,
        formControls: {
          name: action.payload.name,
          type: action.payload.type,
          region: action.payload.region,
          image_url: action.payload.image_url,
          rating: action.payload.rating
        }
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case UPDATE_PRODUCT_ON_CHANGE:
      console.log("state.formControls", state.formControls);
      return {
        ...state,
        formControls: {
          ...state.formControls,
          name: action.payload.product.name,
          type: action.payload.product.type,
          region: action.payload.product.region,
          image_url: action.payload.product.image_url,
          rating: action.payload.product.rating
        }
      };

    default:
      return state;
  }
}
