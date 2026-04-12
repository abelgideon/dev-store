import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  return (
    <>
      <h1 className="products-header">Products</h1>
      <p className="products-sub">Search for products or filter by category</p>

      <div className="filters">
        <div className="search-group">
          <label className="search-label" htmlFor="search">
            Search:
          </label>
          <input placeholder="Enter product name" id="search" type="text" />
        </div>

        <div className="category-group">
          <label className="category-label" htmlFor="category">
            Category:
          </label>
          <select id="category">
            <option>Select category</option>
            <option>Accessories</option>
            <option>Books</option>
            <option>Softwares</option>
          </select>
        </div>
      </div>

      <div className="products-display">
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
        <Link className="product-card-link" to="/products/123">
          <ProductCard />
        </Link>
      </div>
    </>
  );
}

export default ProductsPage;
