import React, { useEffect, useState } from "react";
import "../css/Article.css";
import {useParams} from "react-router-dom";

export default function Article() {
  const [post, setPost] = useState({});
	  const {id} = useParams();

  useEffect(() => {
	  const token = localStorage.getItem('token');
    fetch(`http://127.0.0.1:8000/posts/${id}`,{
		headers:{
			'Authorization' : `Token ${token}`,
		}
	})
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
