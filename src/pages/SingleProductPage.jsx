import { Link, useParams } from "react-router-dom";
import products from "../products";

function SingleProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  return (
    <div className="single-product-container">
      <img
        className="single-product-img"
        src={product.image}
        alt={product.name}
      />
      <div className="single-product-right">
        <h1>{product.name}</h1>
        <p className="single-product-description">{product.description}</p>
        <div className="single-product-footer">
          <p className="single-product-stock">
            Stock: {product.stock > 0 ? product.stock : "Out of stock"}
          </p>
          <p className="single-product-price">${product.price}</p>
        </div>
        <Link className="btn cart-btn" to="/cart">
          Add to cart
        </Link>
      </div>
    </div>
  );
}

export default SingleProductPage;
