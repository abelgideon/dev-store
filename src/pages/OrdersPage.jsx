import OrderItem from "../components/OrderItem";

function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return (
    <>
      <h1 className="orders-header">Order History</h1>
      <p className="orders-sub">View your past orders</p>

      <div className="orders-items">
        {[...orders].reverse().map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </>
  );
}

export default OrdersPage;
