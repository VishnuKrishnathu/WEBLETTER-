import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./Article";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setfetchStatus] = useState(true);
//	const token = useSelector(token => token.tokens);
  const content = `
  <div className = "error-page">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
  `;
  ///// check the data from the fetch api ////
	
	const checkData = (data) =>{
		if (data.detail){setfetchStatus(false)}
		else{setPosts(data)}
	}
  //////// loading posts from the api ///////
  useEffect(() => {
	  const token = localStorage.getItem('token');
		fetch("http://127.0.0.1:8000/posts/",{
			headers:{
				'Authorization' : `Token ${token}`,
			}
		})
		  .then((res) => res.json())
		  .then((data) => checkData(data))
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
        <div key={post.id}>
          <Link to={`/${post.id}`}>
            <Card post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}
