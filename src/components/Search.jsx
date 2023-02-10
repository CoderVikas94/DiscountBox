import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/UseReducer/Product";

const Search = () => {
const [search, setSearch] = useState("")
const Dispatch=useDispatch()



  const handleSearch = (e) =>{
    setSearch(e.target.value)

 }

const buttonSearch = ()=>{ 
  Dispatch(searchProduct(search));
  setSearch("");
}

  return (
    <div className="search-box">
      <input type="search" value={search} onChange={handleSearch} />
      <button  onClick={buttonSearch}><FaSearch style={{ fontSize: "18px" }} /></button>
    </div>
  );
};

export default Search;


