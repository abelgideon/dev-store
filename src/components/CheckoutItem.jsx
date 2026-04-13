function CheckoutItem({ item }) {
  return (
    <div className="checkout-item">
      <p className="checkout-item-name">
        {item.name} X{item.quantity}
      </p>
      <p className="checkout-item-price">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default CheckoutItem;
