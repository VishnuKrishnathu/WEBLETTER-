import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);

  //////// loading posts from the api ///////
  useEffect(() => {
    fetch("http://127.0.0.1:8000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  /// updating the changes in the use effect
  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  return (
    <div className="main-content">
      {posts.map((post) => (
        <Card />
      ))}
    </div>
  );
}
