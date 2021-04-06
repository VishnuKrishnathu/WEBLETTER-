import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./Article";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setfetchStatus] = useState(true);
  const content = `
  <div className = "error-page">
    <a href="#">Login</a>
    <a href="#">Register</a>
  </div>
  `;

  //////// loading posts from the api ///////
  useEffect(() => {
    fetch("http://127.0.0.1:8000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setfetchStatus(false));
  }, []);
  useEffect(() => {
    if (!fetchStatus) {
      document.querySelector(".main-content").innerHTML = content;
    }
  }, [fetchStatus]);

  return (
    <div className="main-content">
      {posts.map((post) => (
        <>
          <Link to={`/${post.id}`}>
            <Card post={post} />
          </Link>
        </>
      ))}
    </div>
  );
}
