import { combineReducers } from "redux";
import cart from "./cart";
import listProduct from "./listProduct";
import notify from "./notify";
import search from "./search";

const reducer = combineReducers({
  listProduct: listProduct,
  cart: cart,
  notify: notify,
  search: search,
});

export default reducer;
