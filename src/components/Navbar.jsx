import React, { useEffect, useState } from "react";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./Search";
import axios from "axios";
import { useDispatch } from "react-redux";
import { categoryItem } from "../redux/UseReducer/Product";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [list, setList] = useState("");
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const getCategory = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setList(response?.data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  const handleList = (e) => {
    Dispatch(categoryItem(e));
    Navigate("/", { state: e });
  };
  return (
    <>
      {list && (
        <div className="nav-container">
          <nav>
            <h1>Discountbox</h1>
            <ul>
              <Link to="/">Home</Link>
              <li onClick={() => handleList(list[0])}>
                {list[0].charAt(0).toUpperCase() + list[0].slice(1)}
              </li>
              <li onClick={() => handleList(list[1])}>
                {list[1].charAt(0).toUpperCase() + list[1].slice(1)}
              </li>
              <li onClick={() => handleList(list[2])}>
                {list[2].charAt(0).toUpperCase() + list[2].slice(1)}
              </li>
              <li onClick={() => handleList(list[3])}>
                {list[3].charAt(0).toUpperCase() + list[3].slice(1)}
              </li>
              <li onClick={() => handleList(list[4])}>
                {list[4].charAt(0).toUpperCase() + list[4].slice(1)}
              </li>
            </ul>
            <div className="icon">
              <Search />
              <FaShoppingCart style={{ fontSize: "18px" }} />
            </div>
          </nav>
          {/* <Addvertisment/> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
