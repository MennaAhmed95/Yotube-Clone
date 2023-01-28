import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.styles.css";
import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
// import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTxt, setSearchTxt] = useState("");
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      //   dispatch(clearVideos());
      //   dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="navbar_container">
      <Link to="/">
        <div className="youtube_icon">
          <BsYoutube className="icon_color" />
          <span className="icon_text">YouTube</span>
        </div>
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="navbar_search">
          <div className="search_container">
            <input
              type="text"
              placeholder="Search"
              className="input_search"
              value={searchTxt}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTxt(e.target.value)
              }
            />

            <AiOutlineClose onClick={() => setSearchTxt("")} />
          </div>
          <button className="btn_search" type="submit">
            <AiOutlineSearch
              style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
