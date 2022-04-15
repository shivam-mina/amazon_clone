import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./style/subtotal.css";
import { getBasketTotal } from "./reducer";
function Subtotal({ price }) {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <p className="subtotal__gift">
              <input type="checkbox" />
              <small>This order contains a gift.</small>
            </p>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        value={getBasketTotal(basket)}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
