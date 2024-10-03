import React from "react";
import { useParams } from "react-router-dom";
import "../style/SingleNew.css";
import slugifyText from "../utils/slugifyText";

function SinglePost({ renderPosts }) {
  const { tittle } = useParams();

  const post = renderPosts.find((post) => slugifyText(post.slug) === tittle);

  if (!renderPosts) {
    return <div>Loading...</div>;
  }

  return (
    <article className="max-w-4xl mx-auto py-8 bg-white container-lg mt-4 mb-4">
      <div className="mb-8">
        <h4 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h4>
        <div className="flex items-center text-gray-600 mb-4 gap-1">
          <img
            src="../img/logo.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full mr-3 "
          />
          <span className="mr-4">{post.adminUpdated}</span>
          <span>{post.updatedDate}</span>
        </div>
        <img
          src={post.image}
          alt="Vịnh Hạ Long"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none mt-3 mb-3">
        <p>
          {post.description}
          <br />
          {post.metaDescription}
        </p>
      </div>

      <footer className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-white bg-gray-600">
          Bài viết này được cập nhật lần cuối vào {post.updatedDate}. Nếu bạn có
          bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ với chúng tôi.
        </p>
      </footer>
    </article>
  );
}

export default SinglePost;
