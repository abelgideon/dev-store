import OrderItem from "../components/OrderItem";

function OrdersPage() {
  return (
    <>
      <h1 className="orders-header">Order History</h1>
      <p className="orders-sub">View your past orders</p>

      <div className="orders-items">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </>
  );
}

export default OrdersPage;
