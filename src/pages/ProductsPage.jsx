import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../products";
import { useState } from "react";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  let filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter(
      (product) =>
        category === "" ||
        product.category.toLowerCase() === category.toLowerCase(),
    );

  return (
    <>
      <h1 className="products-header">Products</h1>
      <p className="products-sub">Search for products or filter by category</p>

      <div className="filters">
        <div className="search-group">
          <label className="search-label" htmlFor="search">
            Search:
          </label>
          <input
            placeholder="Enter product name"
            value={search}
            onChange={handleSearch}
            id="search"
            type="text"
            name="search"
          />
        </div>

        <div className="category-group">
          <label className="category-label" htmlFor="category">
            Category:
          </label>
          <select id="category" value={category} onChange={handleCategory}>
            <option value="">Select category</option>
            <option value="Input Devices">Input Devices</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
            <option value="Power & Charging">Power & Charging</option>
            <option value="Learning Resources">Learning Resources</option>
          </select>
        </div>
      </div>

      <div className="products-display">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            className="product-card-link"
            to={`/products/${product.id}`}
          >
            <ProductCard
              name={product.name}
              imageUrl={product.image}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
