import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { searchItem } from "../redux/UseReducer/Product";
import Itemdescription from "./Itemdescription";
import Product from "./Product";

const Main = () => {
  const [newArrival, setNewArrival] = useState([]);
  const Dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setNewArrival(res.data.products);
    });
  }, []);
  const location = useLocation();
  const Navigate  = useNavigate()
  


  return (
    <>
      <div className="main-container">
        
        <div className="top-product-box">
          {newArrival &&
            newArrival?.slice(0, 8).map((item) => {
              return (
                <>
                  <div className="product-img-box">
                    <img src={item?.thumbnail} alt="img"></img>
                    <span>{item?.title}</span>
                    <span>
                      <p>New Arrival</p>
                    </span>
                    <button id={item.id} onClick={(e) => {
                      {location.pathname !=="Item" &&Navigate("/Item", { state: item.id });}
                      Dispatch(searchItem(e?.target?.id))
                    }}
                  >SHOP</button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="left">
      <p>Discountbox Choice</p>

          {newArrival &&
            newArrival?.slice(10,16).map((item) => {
              return (
                <>
                  <div className="product-img-box" >
                    <img src={item?.thumbnail} alt="img"></img>
                    <span>{item?.title}</span>
                    <span>
                      <p>Discountbox Choice</p>
                    </span>
                    <button id={item.id} onClick={(e) => {
                      {location.pathname !=="Item" &&Navigate("/Item", { state: item.id });}
                      Dispatch(searchItem(e?.target?.id))
                    }}
                  >SHOP</button>
                  </div>
                </>
              );
            })}
            </div>
            <div className="right">
              <p>Most Bought</p>
          {newArrival &&
            newArrival?.slice(20, 26).map((item) => {
              return (
                <>
                  <div className="product-img-box">
                    <img src={item?.thumbnail} alt="img" ></img>
                    <span>{item?.title}</span>
                    <span>
                      <p>Most Bought</p>
                    </span>
                    <button id={item.id} onClick={(e) => {
                      {location.pathname !=="Item" &&Navigate("/Item", { state: item.id });}
                      Dispatch(searchItem(e?.target?.id))
                    }}
                  >SHOP</button>
                  </div>
                </>
              );
            })}
            </div>

     {location.pathname !=="/Item"?<Product />:<Itemdescription/>}
    </>
  );
};

export default Main;
