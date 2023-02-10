import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { categoryItem, fetchProduct } from "../redux/UseReducer/Product";
import ReactLoading from "react-loading";

const Product = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const Dispatch = useDispatch();
  const reduxData = useSelector((state) => state);

  useEffect(() => {
    Dispatch(fetchProduct());
    {location.state&&(Dispatch(categoryItem(location.state)))}
  }, []);


  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, [reduxData?.category?.data?.products, reduxData?.product?.data?.products
  ]);

  const location = useLocation()
  return (
    <>
      {isLoading && (
        <div className="loader">
          <ReactLoading type={"spinningBubbles"} color={"#00000"} />
        </div>
      )}
      {reduxData?.product?.data?.products?.length > 0 ? (
        !reduxData?.category?.data?.products ? (
          reduxData?.product?.data?.products
        ) : (
          (reduxData?.category?.data?.products).map((val) => {
            return (
              <>
             {!isLoading &&(<div className="item-container" key={val.id}>
                <img src={val.images[0]} alt="product"></img>
                <div className="product-summary">
                  <h2>{val.title}</h2>
                  <p>{val.description}</p>
                  <h4>Discount: {val.discountPercentage}%</h4>
                  <button
                    onClick={(e) => {
                      Navigate("/Item", { state: val.id });
                    }}
                  >
                    SEE PRODUCT
                  </button>
                </div>
              </div>)
              }
              </>

            );
          })
        )
      ) : (
        <>
          <div className="no-data">
            <h2>!No Data Found....</h2>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
