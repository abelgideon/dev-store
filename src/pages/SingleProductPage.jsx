import { Link } from "react-router-dom";

function SingleProductPage() {
  return (
    <div className="single-product-container">
      <img className="single-product-img" src="/products/keyboard.jpg" alt="" />
      <div className="single-product-right">
        <h1>KEYBOARD</h1>
        <p className="single-product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laborum laboriosam pariatur asperiores assumenda illo dolor aspernatur
          quam reprehenderit aliquam consequuntur dignissimos et tempore quas
          eius tenetur nostrum eveniet necessitatibus voluptate, esse explicabo
          at blanditiis enim! Consequatur corporis nulla maxime quisquam sunt
          dignissimos quaerat voluptas nam repellendus quam! Adipisci incidunt
          autem reprehenderit laborum, fuga fugit architecto velit? Excepturi,
          dolor debitis.
        </p>
        <div className="single-product-footer">
          <p className="single-product-stock">Stock: available</p>
          <p className="single-product-price">$12.33</p>
        </div>
        <Link className="btn cart-btn" to="/cart">
          Add to cart
        </Link>
      </div>
    </div>
  );
}

export default SingleProductPage;
