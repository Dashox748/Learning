import "./blog.css";
import { Article } from "../../components";

import { blog01, blog02, blog03, blog04, blog05 } from "../../assets/imports";

const Blog = () => {
  return (
    <div className="blog__container section_padding" id="library">
      <div className="blog__container_heading">
        <h1>
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="blog__container_articles">
        <div className="blog__container_articles-left">
          <Article
            imgurl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
        </div>
        <div className="blog__container_articles-right">
          <Article
            imgurl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgurl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgurl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgurl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
        </div>
      </div>
    </div>
  );
};
export default Blog;
