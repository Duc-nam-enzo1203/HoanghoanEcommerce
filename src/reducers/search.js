import { SEARCH_PRODUCT_AND_POST } from "../constants/actionTypes";

const initialState = {
  searchProducts: [], // Để lưu kết quả tìm kiếm
  searchPosts: [], // Đặt lưu kết quả tìm kiếm post
  searchTerm: "", // Để lưu từ khóa tìm kiếm
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_AND_POST:
      return {
        ...state,
        searchProducts: action.payload.products, // Cập nhật kết quả tìm kiếm sản phẩm
        searchPosts: action.payload.posts, // Cập nhật kết quả tìm kiếm bài viết
        searchTerm: action.payload.searchTerm, // Cập nhật từ khóa
      };

    default:
      return state;
  }
};

export default search;
