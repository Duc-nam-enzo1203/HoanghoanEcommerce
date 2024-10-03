import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) {
  let element = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    element.push(i);
  }

  return (
    <div className="navigation">
      {element.map((item, index) => {
        return (
          <button
            key={index}
            className={item === currentPage ? "btn-news active" : "btn-news"}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
