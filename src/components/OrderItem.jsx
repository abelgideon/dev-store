function OrderItem() {
  return (
    <div className="order-item">
      <div className="div order-item-left">
        <p className="order-item-date">12/04/2026</p>
        <h1>Order ID 123</h1>
        <p className="order-item-items">Keyboard x1, Mouse x1, Antivirus x1</p>
      </div>
      <p className="order-item-right">$100.29</p>
    </div>
  );
}

export default OrderItem;
