import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import "./style/product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__price">
          <p>₹ </p>
          <strong> {price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRatings
                rating={rating}
                numberOfStars={1}
                starRatedColor="#FFD700"
                starDimension="25px"
              />
            ))}
        </div>
      </div>
      <img src={image} alt="product-img" className="product__image" />
      <button className="addtoBasket" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
