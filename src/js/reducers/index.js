import { combineReducers } from "redux";
import foods from "./productsReducer";
import food from "./productReducer";
import toggle from "./toggleReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  foods,
  food,
  toggle,
  form: formReducer
});
