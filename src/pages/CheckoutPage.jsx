import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";

function CheckoutPage() {
  return (
    <>
      <h1 className="checkout-header">Checkout</h1>
      <p className="checkout-sub">
        Enter personal information and review order
      </p>

      <form className="checkout-form">
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
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>
        </div>

        <h1>
          Total: <span className="checkout-price">$100.29</span>
        </h1>
        <Link to="/orders" className="btn checkout-confirm-btn">
          Confirm
        </Link>
      </form>
    </>
  );
}

export default CheckoutPage;
