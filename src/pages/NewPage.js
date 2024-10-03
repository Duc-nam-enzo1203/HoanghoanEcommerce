import React from "react";
import LoopPost from "../components/NewPage/LoopPost";
import Pagination from "../components/NewPage/Pagination";
import "../style/news.css";

export default function NewPage({
  renderPosts,
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const renderPost = renderPosts.map((item, index) => {
    return (
      <LoopPost
        key={index}
        img={item.image}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <section id="gioithieu" className="Block Banner_news">
      <div className="container-lg">
        <div className="container-news">
          <div className="title">
            <h2>Tin tức</h2>
          </div>
          <div className="container-news-item">{renderPost}</div>
          <Pagination
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
}
