import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      <h1 className="cart-header">Cart</h1>
      <p className="cart-sub">Add/Remove items or head to checkout</p>

      <div className="cart-display">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-checkout">
          <h1>
            Total: <span className="cart-price">${total.toFixed(2)}</span>
          </h1>
          <button
            onClick={handleClick}
            className="checkout-btn btn"
            disabled={cart.length <= 0 ? true : false}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
