import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setfetchStatus] = useState(true);
//	const token = useSelector(token => token.tokens);
  const content = `
  <div className = "error-page" style="height: 100%; display:flex; flex-direction:column; justify-content: center; align-items: center">
  	<div style="height: 20%;">
		<a href="/WEBLETTER-/#/login" style="padding: 2rem; font-size: 1.3rem">Login</a>
		<a href="/WEBLETTER-/#/register" style="padding: 2rem; font-size: 1.3rem">Register</a>
	</div>
	<div style="height: 50%;color:red; font-size: 1.3rem; border:3px solid red; display:grid; place-items:center; padding: 2rem">Test Account<br/> Username: test <br/> Password: test</div>
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
		fetch("https://webletterapi.herokuapp.com/posts/",{
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
  }, [fetchStatus, content]);

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
