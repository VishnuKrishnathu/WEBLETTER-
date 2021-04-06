import React from "react";
import "../css/LoginPage.css";

export default function LoginPage() {
  const CheckUser = () => {
    console.log("clicked");
  };
  return (
    <div id="login-page">
      <div className="input_container">
        <div>
          <label for="first_name">Username : </label>
          <input type="text" name="username" id="first_name" />
        </div>
        <div>
          <label for="password">Password : </label>
          <input type="text" name="password" id="password" />
        </div>
        <button onClick={CheckUser}>Login</button>
      </div>
      <p>
        Don't have an account?<a href="/register">Signup</a>
      </p>
    </div>
  );
}
