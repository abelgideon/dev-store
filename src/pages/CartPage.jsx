import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";

function CartPage() {
  return (
    <>
      <h1 className="cart-header">Cart</h1>
      <p className="cart-sub">Add/Remove items or head to checkout</p>

      <div className="cart-display">
        <div className="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-checkout">
          <h1>
            Total: <span className="cart-price">$100.99</span>
          </h1>
          <Link to="/checkout" className="checkout-btn btn">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartPage;
