import "../css/Sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div id="home">Home</div>
      <Link to="/">
        <div id="trending">Trending</div>
      </Link>

      <div className="settings-div">
        <Link to="/users">
          <div className="users">
            <svg
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.4 23.2C32.3095 23.2 34.1409 22.4414 35.4911 21.0912C36.8414 19.7409 37.6 17.9096 37.6 16C37.6 14.0905 36.8414 12.2591 35.4911 10.9088C34.1409 9.55859 32.3095 8.80002 30.4 8.80002C28.4904 8.80002 26.6591 9.55859 25.3088 10.9088C23.9585 12.2591 23.2 14.0905 23.2 16C23.2 17.9096 23.9585 19.7409 25.3088 21.0912C26.6591 22.4414 28.4904 23.2 30.4 23.2V23.2ZM13.6 44.8C13.6 42.5938 14.0345 40.4092 14.8788 38.3709C15.7231 36.3327 16.9606 34.4806 18.5206 32.9206C20.0806 31.3606 21.9326 30.1231 23.9709 29.2788C26.0092 28.4346 28.1938 28 30.4 28C32.6062 28 34.7908 28.4346 36.8291 29.2788C38.8673 30.1231 40.7193 31.3606 42.2794 32.9206C43.8394 34.4806 45.0769 36.3327 45.9212 38.3709C46.7654 40.4092 47.2 42.5938 47.2 44.8H13.6Z"
                fill="#9092BC"
              />
              <circle
                cx="30"
                cy="30"
                r="27.5"
                stroke="#9092BC"
                stroke-width="5"
              />
            </svg>
          </div>
        </Link>
        <Link to="#">
          <div className="logout">
            <svg
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6429 19.3572L38.125 21.875L42.7322 26.5H24.5715V30.0714H42.7322L38.125 34.6786L40.6429 37.2143L49.5715 28.2857L40.6429 19.3572ZM17.4286 15.7857H31.7143V12.2143H17.4286C15.4643 12.2143 13.8572 13.8214 13.8572 15.7857V40.7857C13.8572 42.75 15.4643 44.3572 17.4286 44.3572H31.7143V40.7857H17.4286V15.7857Z"
                fill="#9092BC"
              />
              <circle
                cx="30"
                cy="30"
                r="27.5"
                stroke="#9092BC"
                stroke-width="5"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
