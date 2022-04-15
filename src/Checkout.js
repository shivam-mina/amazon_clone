import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./style/checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/2021/1500x300_GIF_New.gif"
            alt="ad"
          />
          {basket?.length === 0 ? (
            <div className="checkout__title">
              <h2>Your Shopping Basket is Empty</h2>
              <p>
                You have no items in your shopping basket.To Buy one or more
                items, click "Add to basket" button next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2>Your Shopping Basket</h2>
            </div>
          )}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        {basket?.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}
export default Checkout;
