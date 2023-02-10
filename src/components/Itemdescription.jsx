import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchItem } from "../redux/UseReducer/Product";
import ReactLoading from "react-loading";

const Itemdescription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageVal, setimageVal] = useState("");

  const reditemData = useSelector((state) => state?.item?.data);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(searchItem(location.state));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, [reditemData]);

  const location = useLocation();
  console.log("reditemData", reditemData);
  const imageFunction = (e) => {
    setimageVal(e.target.currentSrc);
  };

  return (
    <>
      {isLoading && (
        <div className="loader">
          <ReactLoading type={"spinningBubbles"} color={"#00000"} />
        </div>
      )}
      {!isLoading && (
        <div className="product-details">
          <div className="image-container">
            {reditemData?.images?.map((item) => {
              return <img src={item} alt="images" onClick={imageFunction} />;
            })}
          </div>
          <div className="itemdesc-container">
            <div className="itemdesc-product">
              <div className="itemdesc-img">
                <img
                  src={!imageVal ? reditemData?.thumbnail : imageVal}
                  alt="phone"
                />
              </div>
              <div className="itemdesc-details">
                <p>NEW PRODUCT</p>
                <h2>{reditemData?.title}</h2>
                <h3>{reditemData?.brand}</h3>
                <h5>{reditemData?.description}</h5>
                <span>
                  <p>Price: ${reditemData?.price}</p>
                  <p>Discount:{reditemData?.discountPercentage}%</p>
                </span>
                <button className="shop">SHOP</button>
              </div>
            </div>
            <span>
              <p>
                About
                <strong />: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempora amet iusto molestias! Iure dicta libero est illo,
                debitis nam. Fugiat repudiandae sed nam rerum officia eligendi
                facilis. Aliquid corrupti, architecto veritatis ea dignissimos
                quia minus officiis est enim consequuntur quaerat voluptate
                laborum, praesentium voluptates explicabo, esse eligendi illo
                saepe obcaecati!
              </p>
            </span>
            <span><p>Rating: {reditemData?.rating}</p></span>
            <span><p>In Stock: {reditemData?.stock}</p></span>
            <span><p>Brand: {reditemData?.brand}</p></span>
            <span>
              <p>
                Contact
                <strong />: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempora amet iusto molestias! Iure dicta libero est illo,
                debitis nam. Fugiat repudiandae sed nam rerum officia eligendi
                facilis. Aliquid corrupti, architecto veritatis ea dignissimos
                quia minus officiis est enim consequuntur quaerat voluptate
                laborum, praesentium voluptates explicabo, esse eligendi illo
                saepe obcaecati!
              </p>
            </span>
            <span>
              <p>
                Disclaimer
                <strong />: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempora amet iusto molestias! Iure dicta libero est illo,
                debitis nam. Fugiat repudiandae sed nam rerum officia eligendi
                saepe obcaecati!
              </p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Itemdescription;

//onClick={()=>{Navigate("/")}} onMouseEnter={homeHandle}
