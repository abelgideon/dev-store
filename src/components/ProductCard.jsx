function ProductCard({ imageUrl, name, price, stock }) {
  return (
    <div className="product-card">
      <img className="product-card-img" src={imageUrl} alt={name} />
      <div className="product-card-details">
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">${price}</p>
        {stock != undefined && (
          <p
            className={`product-card-stock ${stock > 0 ? "green-stock" : "red-stock"}`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
