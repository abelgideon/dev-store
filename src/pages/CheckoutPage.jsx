import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: "ORD-" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder]),
    );

    alert("Order confirmed successfully");

    clearCart();
    navigate("/orders");
  };

  return (
    <>
      <h1 className="checkout-header">Checkout</h1>
      <p className="checkout-sub">
        Enter personal information and review order
      </p>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div>
          <label className="checkout-form-label" htmlFor="name">
            Name
          </label>
          <input
            placeholder="Abebe Kebede"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div>
          <label className="checkout-form-label" htmlFor="email">
            Email
          </label>
          <input
            placeholder="example@gmail.com"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div>
          <label className="checkout-form-label" htmlFor="address">
            Address
          </label>
          <input
            placeholder="Addis Ababa"
            type="text"
            name="address"
            id="address"
            required
          />
        </div>

        <div>
          <p className="checkout-form-label">Items</p>
          <div className="checkout-items">
            {cart.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <h1>
          Total: <span className="checkout-price">${total.toFixed(2)}</span>
        </h1>
        <button type="submit" className="btn checkout-confirm-btn">
          Confirm
        </button>
      </form>
    </>
  );
}

export default CheckoutPage;
