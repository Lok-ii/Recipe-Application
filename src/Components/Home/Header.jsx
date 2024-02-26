import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import brandLogo from "../../assets/images/brandLogo.png";
import { RxCrossCircled } from "react-icons/rx";


const Header = () => {
  const [searchHidden, setSearchHidden] = useState(true);
  const hideSearch = () => {
    setSearchHidden((prev) => !prev);
  };
  
  const navigateTo = useNavigate();
  const topSearchRef = useRef("");

  return (
    <header className="w-full h-[5rem] flex items-center justify-between px-32 py-4 bg-lightBackground backdrop-blur-sm relative">
      <div className="logo w-[5rem] bg-transparentLogo bg-blend-multiply">
        <NavLink to={"/"}>
          <img className="w-full h-full" src={brandLogo} alt="" />
        </NavLink>
      </div>
      <nav className="navbar flex items-center gap-8 text-mainText font-semibold">
        <NavLink
          to={"/liked"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-hoverText" : ""
          }
        >
          Liked
        </NavLink>
        <CiSearch onClick={hideSearch} className="cursor-pointer" />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            navigateTo("/search/" + topSearchRef.current.value);
          }}
          className={`absolute w-full transition-all duration-300 left-0 ${
            searchHidden ? "top-[-4rem]" : "top-20"
          } flex items-center bg-white`}
        >
          <input
            type="text"
            className={`outline-none w-[95%] text-gray-600 h-[3.5rem] px-8`}
            placeholder="Search for a recipe...."
            ref={topSearchRef}
          />
          <RxCrossCircled className="w-[5%] text-gray-600 cursor-pointer" onClick={hideSearch} />
        </form>
      </nav>
    </header>
  );
};

export default Header;
