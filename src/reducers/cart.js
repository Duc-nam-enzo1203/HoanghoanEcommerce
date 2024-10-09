import { LOCAL_STORAGE_NAME } from "../constants/localStorage";
import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";

let initialState = {
  items: [],
};

// Kiểm tra localStorage để khôi phục giỏ hàng
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState =
  shoppingCartLocal !== null && Array.isArray(shoppingCartLocal)
    ? { items: shoppingCartLocal }
    : {
        items: [],
      };

// Hàm để tìm chỉ số sản phẩm trong giỏ hàng
const getIndexByProduct = (listItem, product, quantity) => {
  for (let index = 0; index < listItem.length; index++) {
    if (listItem[index].product.id === product.id) {
      return index;
    }
  }
  return -1;
};

const cart = (state = initialState.items, action) => {
  // lấy sản phẩm, số lượng từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  let index = -1;

  switch (action.type) {
    case BUY_ITEM:
      if (state.length === 0) {
        //Khách hàng chưa mua hàng -- Giỏ hàng của khách hàng chưa có sản phẩm
        //--> add item vào giỏ hàng
        state.push(item);
      } else {
        //Khách hàng đã mua hàng -- Giỏ hàng đã có sản phẩm
        index = getIndexByProduct(state, product);
        if (index >= 0) {
          //Sản phẩm mua đã tồn tại trong giỏ hàng
          //--> cộng quantity vào số lượng của item trong giỏ hàng
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        } else {
          //Sản phẩm mua chưa có trong giỏ hàng
          state.push(item);
        }
      }
      //Lưu giỏ hàng vào local storage
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM:
      // thực hiện cập nhật so lướng
      index = getIndexByProduct(state, product);

      if (index >= 0) {
        state[index].quantity = parseInt(item.quantity);
        if (state[index].quantity <= 0) {
          state.splice(index, 1);
        }
      }
      // lưu lại giỏ hàng vào localStorage
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    case REMOVE_ITEM:
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        // thực hiện xóa
        state.splice(index, 1);
      }
      // lưu lại giỏ hàng vào localStorage
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default cart;
