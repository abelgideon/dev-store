import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavContent() {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link active" : "")}
            to="/orders"
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </>
  );
}

function Navbar() {
  const [open, isOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleHamburger = () => {
    isOpen(!open);
  };

  return (
    <nav className="nav-bar">
      <img
        className="ham-icon"
        src="/images/hamburger.png"
        alt="hamburger menu icon"
        width={25}
        onClick={toggleHamburger}
      />

      {open && (
        <div className="mobile-nav">
          <NavContent />
        </div>
      )}

      <Link to="/" className="logo">
        Dev<span>Store</span>
      </Link>

      <div className="large-nav">
        <NavContent />
      </div>

      <Link className="cart-container" to="/cart">
        <img
          className="cart-img"
          src="/images/shopping-cart.png"
          alt="icon of a shopping cart"
          width={25}
        />
        {totalItems > 0 && <span className="items-in-cart">{totalItems}</span>}
      </Link>
    </nav>
  );
}

export default Navbar;
