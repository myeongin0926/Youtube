import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../images/logo.png";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { keyword } = useParams();

  useEffect(() => {
    setSearchText(keyword || "");
  }, [keyword]);

  const onSearchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/videos/${searchText}`);
  };

  return (
    <header className="flex text-3xl p-2 border-b-zinc-700 border-b ">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-9" />
        <h1 className="font-pathway pl-1 text-white font-bold">Youtube</h1>
      </Link>
      <form
        action=""
        onSubmit={(e) => onSearchSubmitHandler(e)}
        className="flex w-full justify-center items-center mx-auto "
      >
        <input
          className="rounded-l-full leading-10 text-base border border-solid border-slate-800 
          w-2/6 h-10 pl-4 ml-10 bg-stone-950 text-white  focus:outline-none"
          type="text"
          value={searchText}
          placeholder="검색"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="flex items-center justify-center border border-solid
           border-slate-800 w-16 h-10 rounded-r-full bg-zinc-800 "
        >
          <HiMagnifyingGlass className="text-xl text-white" />
        </button>
      </form>
    </header>
  );
};

export default Header;
