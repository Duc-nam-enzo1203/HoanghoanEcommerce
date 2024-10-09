import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import LoopPost from "../components/NewPage/LoopPost";

export default function SearchResultPage() {
  const searchTerm = useSelector((state) => state.search.searchTerm); // Lấy từ khóa từ Redux
  const searchProducts = useSelector((state) => state.search.searchProducts); // Lấy kết quả tìm kiếm sản phẩm
  const searchPosts = useSelector((state) => state.search.searchPosts); // Lấy kết quả tìm kiếm bài viết

  let elementsProduct = [];

  if (searchProducts.length > 0) {
    elementsProduct = searchProducts.map((item, index) => (
      <Product
        key={index}
        product={{
          id: item.id,
          cid: item.cid,
          img: `http://apixm.devmaster.vn${item.image}`,
          title: item.title,
          priceOld: item.priceOld,
          priceNew: item.priceNew,
          size: item.size,
          productId: item.productId,
        }}
      />
    ));
  } else {
    elementsProduct = <h6>Không tìm thấy sản phẩm</h6>;
  }

  let elementsPost = [];

  if (searchPosts.length > 0) {
    elementsPost = searchPosts.map((item, index) => (
      <LoopPost key={index} product={item} />
    ));
  } else {
    elementsPost = <h6>Không tìm thấy bài viết</h6>;
  }

  return (
    <div className="container-lg pt-4 pb-4">
      <h3>Kết quả tìm kiếm cho: {searchTerm} </h3>
      <div className="row">
        <div className="col-8 p-0 m-0">
          <div className="row">
            <h4>Sản phẩm</h4>
            {elementsProduct}
          </div>
        </div>
        <div className="col-4 p-0 m-0 ">
          <div className="row">
            <h4>Bài viết</h4>
            {elementsPost}
          </div>
        </div>
      </div>
    </div>
  );
}
