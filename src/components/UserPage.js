import "../css/Userpage.css";
import { useState, useEffect } from "react";

export default function UserPage({ token }) {
  ////////// Hook to store profilepicture data ////////////
  const [profilePicture, setProfilePicture] = useState();

  //////// Post data to api /////////////

  const saveUserData = () => {
    let lname = document.querySelector("#lname").value;
    let fname = document.querySelector("#fname").value;
    let emailid = document.querySelector("#emailadd").value;
    let phone_number = document.querySelector("#phoneno").value;

    let data = new FormData();
    data.append("firstname", fname ? fname : profileData.firstname);
    data.append("lastname", lname ? lname : profileData.lastname);
    data.append("emailid", emailid ? emailid : profileData.emailid);
    data.append(
      "phonenumber",
      phone_number ? phone_number : profileData.phonenumber
    );
    if (profilePicture) {
      data.append("profilepicture", profilePicture);
    }

    fetch(`http://127.0.0.1:8000/api/${token.id}/`, {
      method: "POST",
      body: data,
    }).catch((error) => console.log(error));
  };

  ///////Use State Hook to set Profile Data///////////////////

  const [profileData, setProfiledata] = useState(() => {
    return {
      firstname: "First Name",
      lastname: "Last Name",
      emailid: "Enter your email address",
      phonenumber: "Enter your mobile number",
      profilepicture: "../assets/profile-picture.jpg",
    };
  });

  //use effect hook to fetch data after loading//////////

  useEffect(() => {
	  console.log(token);
    fetch(`http://127.0.0.1:8000/api/${token.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProfiledata(data));
  }, []);

  ///use effect hook to update data/////////////////////

  useEffect(() => {
    let style = `--main-url: url("http://127.0.0.1:8000${profileData.profilepicture}");`;
    const profilepic = document.querySelector("#profile-picture");
    profilepic.setAttribute("style", style);
  }, [profileData]);

  //////////rendered output/////////////////////

  return (
    <div className="users-page">
      <div id="profile-picture">
        <div>
          <label for="avatar">
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </label>
          <input
            type="file"
            id="avatar"
            accept="image/png, image/jpeg ,image/jpg"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
      </div>
      <div id="firstlast-name">
        <div id="firstname">
          <label for="fname">First Name : </label>
          <input
            id="fname"
            type="text"
            placeholder={profileData.firstname}
            name="fname"
            required
          />
        </div>
        <div id="lastname">
          <label for="lname">Last Name : </label>
          <input
            id="lname"
            type="text"
            placeholder={profileData.lastname}
            name="lname"
            required
          />
        </div>
      </div>
      <div id="email-add">
        <label for="emailadd">Email ID :</label>
        <input
          id="emailadd"
          name="emailadd"
          type="text"
          placeholder={profileData.emailid}
          required
        />
      </div>
      <div id="contact-number">
        <label for="phone-no">Contact Number (With country code) :</label>
        <input
          id="phoneno"
          name="phone-no"
          type="text"
          placeholder={profileData.phonenumber}
        />
      </div>
      <button onClick={saveUserData}>Save</button>
    </div>
  );
}
