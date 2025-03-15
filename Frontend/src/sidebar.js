import { React, useState, useEffect } from "react";
import "./pages/styles/dashboard.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar({ activeItem }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked!");
    navigate("/login");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getname")
      .then((response) => response.json())
      .then((data) => setName(data))
      .catch((error) => console.error("Error fetching forms:", error));
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logodash">
          <img src={logo} alt="logo" />
        </div>
        <div className="app-icon">Wool Info Heaven</div>
      </div>
      <ul className="sidebar-list">
        <li
          className={`sidebar-list-item ${activeItem === "1" ? "active" : ""}`}
        >
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "2" ? "active" : ""}`}
        >
          <Link to="/shop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Shop</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "3" ? "active" : ""}`}
        >
          <Link to="/product">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>{" "}
                <path
                  opacity="0.5"
                  d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>{" "}
              </g>
            </svg>
            <span>Product</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "4" ? "active" : ""}`}
        >
          <Link to="/news">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            <span>News</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "5" ? "active" : ""}`}
        >
          <Link to="/education">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span>Education</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "6" ? "active" : ""}`}
        >
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <circle cx="8" cy="21" r="2"></circle>
              <circle cx="20" cy="21" r="2"></circle>
              <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>
            </svg>
            <span>Cart</span>
          </Link>
        </li>
        <li
          className={`sidebar-list-item ${activeItem === "7" ? "active" : ""}`}
        >
          <Link to="/chat">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                opacity="0.5"
                d="M8 12H8.009M11.991 12H12M15.991 12H16"
                stroke="#1C274C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Chat</span>
          </Link>
        </li>

        <li
          className={`sidebar-list-item ${activeItem === "8" ? "active" : ""}`}
        >
          <Link to="/contactus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
      <div className="account-info">
        <Link to="/profile">
          <div className="account-info-picture">
            <img
              src={
                name.image == null
                  ? "https://i.pinimg.com/564x/b0/4b/84/b04b840490ada8ad48d9336a57b2a7b2.jpg"
                  : name.image
              }
              alt="Account"
            />
          </div>
        </Link>
        <div className="account-info-name">{name.name}</div>
        <div className="menu-container">
          {showMenu && (
            <div className="popup-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <button
            type="button"
            className="account-info-more"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              color="#FFCD00"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-more-horizontal"
              id="feather"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
