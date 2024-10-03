import * as types from "../constants/actionTypes";
import mockAPI from "../api/mock-api";

// action cho chức năng hiển thị thông tin sản phẩm
export const act_list_product = () => {
  return {
    type: types.LIST_PRODUCT,
  };
};
// action cho chức năng mua hàng (click nút mua hàng)
export const act_buy_item = (product, quantity) => {
  return {
    type: types.BUY_ITEM,
    product,
    quantity,
  };
};
// action cho chức năng cập nhật số lượng trong giỏ hàng
export const act_update_item = (product, quantity) => {
  return {
    type: types.UPDATE_ITEM,
    product,
    quantity,
  };
};
// action cho chức năng xóa sản phẩm trong giỏ hàng
export const act_remove_item = (product) => {
  return {
    type: types.REMOVE_ITEM,
    product,
  };
};
// action cho chức năng thông báo
export const act_change_notify = (content) => {
  return {
    type: types.CHANGE_NOTIFY,
    content,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await mockAPI.get("/Products");
      dispatch({
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: response.data, // assuming response contains product data in 'data' property
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch({
        type: types.FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
