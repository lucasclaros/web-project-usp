import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import UserContext from "../../../../context/UserContext";
import { ReactComponent as ShoppingBag} from "./assets/shopping-bag.svg";
import "./CartButton.css";

const CartButton = () => {
  const { cart, setCart } = useContext(UserContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-button-wrapper">
      <Link to="/cart" className="cart-button-link">
        <div className="cart-button">
          <ShoppingBag className="cart-icon" />
          {cartItemCount > 0 && (
            <span className="cart-item-count">{cartItemCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartButton;
