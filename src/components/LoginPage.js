import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../css/LoginPage.css";

export default function LoginPage() {
	const [loginAccess, setLoginAccess] = useState(false);
	const history = useHistory();
  const CheckUser = () => {
	 const username = document.getElementById("first_name").value;
	  const password = document.getElementById("password").value;
	  const user_data = new FormData();
	  user_data.append("username", username);
	  user_data.append("password", password);
	  fetch("http://127.0.0.1:8000/auth/login/",{
		  method:'POST',
		  body:user_data,
	  }).then(res => res.json())
	  .then(data => setLoginAccess(data.login));
  };
	useEffect(()=>{
		if (loginAccess){
			history.push("/");
		}
	},[loginAccess]);
  return (
    <div id="login-page">
      <div className="input_container">
        <div>
          <label for="first_name">Username : </label>
          <input type="text" name="username" id="first_name" />
        </div>
        <div>
          <label for="password">Password : </label>
          <input type="password" name="password" id="password" />
        </div>
        <button onClick={CheckUser}>Login</button>
      </div>
      <p>
        Don't have an account?<a href="/register">Signup</a>
      </p>
    </div>
  );
}
