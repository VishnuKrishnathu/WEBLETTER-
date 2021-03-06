import { useState, useEffect } from "react";

export default function Card({post}) {
  const [user, setUser] = useState({});

  useEffect(() => {
	  const token = localStorage.getItem('token');
    fetch(`https://webletterapi.herokuapp.com/api/${post.posts}`,{
		headers : {
			'Authorization' : `Token ${token}`,
		}
	})
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [post]);

  //// setting the background image for cards

  useEffect(() => {
    let id = user.firstname + post.theme_image;
    const style = `--card-url: url("https://webletterapi.herokuapp.com${post.theme_image}");`;
    const car_id = document.getElementById(id);
    car_id.setAttribute("style", style);
  }, [user, post]);

  return (
    <div className="card" id={user.firstname + post.theme_image}>
      <div className="title-content">
        {post.title}
        <span>
          -{user.firstname} {user.lastname}
        </span>
      </div>
    </div>
  );
}
