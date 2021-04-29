import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "../css/HomePage.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function HomePage() {
  ///// use State hook to set posts ////////
  const [posts, setPosts] = useState([]);
  const [fetchStatus, setfetchStatus] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(true);
	const checkData = (data) =>{
    setLoadingScreen(false);
		if (data.detail){setfetchStatus(false)}
		else{setPosts(data)}
	}
  const handleError = (err)=>{
    setLoadingScreen(false);
    setfetchStatus(false);
  }
  //////// loading posts from the api ///////
  useEffect(() => {
    if (loadingScreen){
	  const token = localStorage.getItem('token');
		fetch("https://webletterapi.herokuapp.com/posts/",{
			headers:{
				'Authorization' : `Token ${token}`,
			}
		})
		  .then((res) => res.json())
		  .then((data) => checkData(data))
		  .catch((err) => handleError(err));
    }
  }, [loadingScreen]);
	/*
  useEffect(() => {
    if (!fetchStatus) {
      document.querySelector(".main-content").innerHTML = content;
    }
  }, [fetchStatus, content]);
*/
	const stripePromise = loadStripe("pk_test_51IlSFtSC5EizyScKyNhFHgoxtl5eLQTdyBkL0ExEVTmZfHlRnpHwRaROGFwzBPSTzGYTtA9ecMempc5iSefdGcA700mM11YTy8");
  return (
    <div className="main-content">
	  { !loadingScreen && fetchStatus && 
      posts.map((post) => (
        <div key={post.id}>
          <Link to={`/${post.id}`}>
            <Card post={post} />
          </Link>
        </div>
      ))
	  }
	  { !loadingScreen && !fetchStatus && 
    <Elements stripe = {stripePromise}>
    <ErrorPage />
    </Elements>
    }
    {loadingScreen && <div className='loading'>Loading ...</div>}
    </div>
  );
}
