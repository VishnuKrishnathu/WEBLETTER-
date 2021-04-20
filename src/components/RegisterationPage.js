import React,{useState, useEffect} from "react";
import "../css/RegisterationPage.css";
import { useHistory } from "react-router-dom";

export default function RegisterationPage() {
	const [userData, setUserData] = useState(null);
	const [Data, setData] = useState({});
	const history = useHistory();
	useEffect(() =>{
		localStorage.clear();	
	},[])
	const RegisterUser = ()=>{
		const first_name = document.getElementById('fname').value;
		const last_name = document.getElementById('lname').value;
		const email_add = document.getElementById('Email').value;
		const password1 = document.getElementById('password1').value;
		const password2 = document.getElementById('password2').value;
		const username = document.getElementById('username').value;
		const phone_number = document.getElementById('phone_number').value;
		setData({
			firstname: first_name,
			lastname: last_name,
			emailadd: email_add,
			password: password1,
			user_name: username,
			phonenumber: phone_number,
		});
		if(first_name && last_name && email_add && password1 && password2 && username && phone_number){
		    	let data = new FormData();
		    	data.append("firstname", first_name);
		    	data.append("lastname", last_name);
		    	data.append("emailid", email_add);
		    	data.append("phonenumber", phone_number)
			if(password1 !== password2){
				console.error("passwords dosen't match");
				return;
			}else{
				fetch("https://webletterapi.herokuapp.com/api/",{
					method:'POST',
					body:data,
				}).then(res => res.json()).then(data => setUserData(data.id));
			}
			////registered the user adding the data to username database
		}
	}
	///adding the data to the username database and authorizing the user
	useEffect(()=>{
		if(userData !== null){
			let data = new FormData();
			data.append('userdata', userData);
			data.append('username', Data.user_name);
			data.append('firstname', Data.firstname);
			data.append('lastname', Data.lastname);
			data.append('password', Data.password);
			data.append('email', Data.emailadd)
			fetch('https://webletterapi.herokuapp.com/auth/register/',{
				method: 'POST',
				body:data,
			}).then(res => res.json()).then(data => {
				if(data.username && data.password){
					document.querySelector(".error_success").textContent="User Created Successfuly";
					history.push('/login');
				}else{
					document.querySelector(".error_success").textContent="User not created try a different username and password";
				}
			});

		}
	},[userData])



	return (
    <div className="register_page">
      <div className="reg-input_container">
        <div>
          <label for="fname">First Name:</label>
          <input name="fname" id="fname" type="text" />
        </div>
        <div>
          <label for="lname">Last Name:</label>
          <input name="lname" id="lname" type="text" />
        </div>
	  <div>
		<label for="username">Username:</label>
	  	<input type='text' name='username' id='username'/>
	  </div>
        <div>
          <label for="Email">Email address:</label>
          <input type="text" name="Email" id="Email" />
        </div>
	<div>
		<label for="phone_number">Mobile Number : </label>
	  	<input type='text' id='phone_number' name='phone_number'/>
	  </div>
	  <div>
	  	<label for="password1">Password:</label>
	  	<input type="password" name='password1' id="password1"/>
	  </div>
	  <div>
	  	<label for="password2">Confirm Password:</label>
	  	<input type="password" name='password2' id="password2"/>
	  </div>
	  <button onClick={RegisterUser}>Sign In</button>
      </div>
		<section className="error_success"></section>
    </div>
  );
}
