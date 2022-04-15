import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import "./style/checkoutproduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__Product">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <p>₹ </p>
          <strong> {price}</strong>
        </div>
        <div className="checkoutProduct__rating">
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
        <button className="checkoutProduct__button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
