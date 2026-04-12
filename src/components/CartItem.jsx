import ProductCard from "./ProductCard";

function CartItem() {
  return (
    <div className="cart-item">
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button>-</button>
          <span className="quantity">1</span>
          <button>+</button>
        </div>
        <img
          className="delete-btn"
          src="/images/delete.png"
          alt="delete icon"
          width={35}
        />
      </div>
      <ProductCard />
    </div>
  );
}

export default CartItem;
