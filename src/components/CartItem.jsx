import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button
            className="plus-quantity"
            onClick={() => decreaseQty(item.id)}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="minus-quantity"
            onClick={() => increaseQty(item.id)}
            disabled={item.quantity >= item.stock}
          >
            +
          </button>
        </div>
        <img
          className="delete-btn"
          src="/images/delete.png"
          alt="delete icon"
          width={35}
          onClick={() => removeItem(item.id)}
        />
      </div>
      <ProductCard imageUrl={item.image} name={item.name} price={item.price} />
    </div>
  );
}

export default CartItem;
