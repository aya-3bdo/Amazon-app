import React from "react";
import "../styling/real-products.css";
import RatingStars from "./RatingStars";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../logic/Cart-slice";
import { useEffect, useState } from "react";
import axios from "axios";
export const RealProducts = () => {
  const customIcons = [
    // *********** 2.5   ===>  0
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],

    //  ********  3     ===>  1
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],

    //  ******** 3.5      ===>  2
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],
    //  ********  4      ===>  3
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],
    //  ******** 4.5     ===>  4
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
    ],

    //  ********  5      ===>  5

    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
    ],
  ];

  const styleAddedBtn = {
    background: "hsl(0, 39%, 43%)",
    width: "45%",
    fontSize: "0.9rem",
    paddingInline: "6px",
    paddingBlock: "1px",
  };
  const dispatch = useDispatch();
  const { cartItems, itemsList } = useSelector((state) => state.shoppingCart);

  const [items, setItems] = useState([]);
  const getItems = async () => {
    const { data } = await axios.get(
      " https://aya-3bdo.github.io/products/products.json"
    );
    setItems(data.products);
  };
  useEffect(() => {
    getItems();
  }, []);

  function styleTotalPrice(cost) {
    let addCommas = cost.toLocaleString();
    return addCommas;
  }

  return (
    <>
      <div id="RealProducts" className="RealProducts">
        <div className="RealProducts-fir-row container">
          {items.length > 0 ? (
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-3">
                  <div className="card">
                    <img
                      src={`../assets/imgs/realProduct${item.id}.jpg`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="card-text">
                        <span> {item.description}</span>{" "}
                      </p>
                      <p>
                        <RatingStars
                          customIcons={customIcons[item.ratingOrder]}
                          initialValue={item.initialValue}
                          readonly={true}
                          allowFraction={true}
                        />
                      </p>
                      <div className="price">
                        {" "}
                        <span>EGP</span>
                        {styleTotalPrice(item.price)}
                        <span>00</span>
                        {cartItems.length > 0 ? (
                          cartItems.some((val) => val.id === item.id) ? (
                            <span
                              style={styleAddedBtn}
                              className="btn"
                              onClick={() => {
                                dispatch(addToCart(item));
                              }}
                            >
                              Added to cart
                            </span>
                          ) : (
                            <span
                              className="btn"
                              onClick={() => {
                                dispatch(addToCart(item));
                                // totalItemsPrice;
                              }}
                            >
                              Add to cart
                            </span>
                          )
                        ) : (
                          <span
                            className="btn"
                            onClick={() => {
                              dispatch(addToCart(item));
                              // totalItemsPrice;
                            }}
                          >
                            Add to cart
                          </span>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div class="spinner-border text-warning mx-auto position-relative" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
