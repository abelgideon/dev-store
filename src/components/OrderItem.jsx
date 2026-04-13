function OrderItem({ order }) {
  return (
    <div className="order-item">
      <div className="div order-item-left">
        <p className="order-item-date">{order.date}</p>
        <h1>{order.id}</h1>
        <p className="order-item-items">
          {order.items
            .map((item) => `${item.name} X${item.quantity}`)
            .join(", ")}
        </p>
      </div>
      <p className="order-item-right">${order.total.toFixed(2)}</p>
    </div>
  );
}

export default OrderItem;
