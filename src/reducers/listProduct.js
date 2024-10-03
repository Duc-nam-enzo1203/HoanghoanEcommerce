import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../constants/actionTypes";

// Tạo reducer -> listProduct
const initialState = {
  listProduct: [],
  error: null,
};

const listProduct = (state = initialState, action) => {
  // switch (action.type) {
  //   case LIST_PRODUCT:
  //     return state;
  //   default:
  //     return state;
  // }
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        listProduct: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listProduct;
