import React, { useEffect, useState } from "react";
import "../css/Article.css";

export default function Article({ match }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    console.log(match.params.id);
    fetch(`http://127.0.0.1:8000/posts/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    console.log(post);
  }, []);

  useEffect(() => {
    const content = document.querySelector("#content");
    content.innerHTML = post.article;
    let themepicture = document.querySelector("#main-article");
    themepicture.setAttribute(
      "style",
      `--theme-image: url("http://localhost:8000${post.theme_image}");`
    );
  }, [post]);

  return (
    <div id="main-article">
      <div className="theme-image"></div>
      <article id="content"></article>
    </div>
  );
}
