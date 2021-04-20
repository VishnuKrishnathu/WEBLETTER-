import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import "../css/LoginPage.css";

export default function LoginPage() {
	const [loginAccess, setLoginAccess] = useState({});
	const [userData, setUserData] = useState({});
	const [token, setToken] = useState({});
	const history = useHistory();
  const CheckUser = () => {
	 const username = document.getElementById("first_name").value;
	  const password = document.getElementById("password").value;
	  const user_data = new FormData();
	  user_data.append("username", username);
	  user_data.append("password", password);
	  setUserData(user_data);
	  fetch("https://webletterapi.herokuapp.com/auth/login/",{
		  method:'POST',
		  body:user_data,
	  }).then(res => res.json())
	  .then(data => setLoginAccess(data));
  };
//// clearing the local storage /////
	useEffect(()=>{
		localStorage.clear();
	}, [])
	//getting token from the api
	useEffect(()=>{
		if (loginAccess.username){
			fetch('https://webletterapi.herokuapp.com/auth/', {
				method:'POST',
				body: userData,
			}).then(res => res.json())
			.then(data => setToken(data));
		}
	},[loginAccess]);


	/// updating the token to the reducers
	useEffect(()=>{
		if (token.token){
			localStorage.setItem('token', token.token);
			localStorage.setItem('dataid', loginAccess.userdata);
			history.push('/');
		}else{
			document.querySelector('.error_class').textContent= "Enter a valid username and password";
		}
	}, [token]);
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
	  <p className= "error_class" style = {{ color: 'red'}}>
	  </p>
    </div>
  );
}
