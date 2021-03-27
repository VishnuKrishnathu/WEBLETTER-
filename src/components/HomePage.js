import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./Article";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);

  //////// loading posts from the api ///////
  useEffect(() => {
    fetch("http://127.0.0.1:8000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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
