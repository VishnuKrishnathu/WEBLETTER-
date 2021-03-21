import "../css/Userpage.css";

export default function UserPage() {
  return (
    <div className="users-page">
      <div id="profile-picture">
        <div>
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
        </div>
      </div>
      <div id="firstlast-name">
        <div id="firstname">
          <label for="fname">First Name : </label>
          <input type="text" placeholder="First Name" name="fname" required />
        </div>
        <div id="lastname">
          <label for="lname">Last Name : </label>
          <input type="text" placeholder="Last Name" name="lname" required />
        </div>
      </div>
      <div id="email-add">
        <label for="emailadd">Email ID :</label>
        <input
          name="emailadd"
          type="text"
          placeholder="Email Address"
          required
        />
      </div>
      <div id="contact-number">
        <label for="phone-no">Contact Number (With country code) :</label>
        <input name="phone-no" type="text" placeholder="Mobile Number" />
      </div>
      <button>Save</button>
    </div>
  );
}
