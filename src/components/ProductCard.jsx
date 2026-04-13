function ProductCard({ imageUrl, name, price }) {
  return (
    <div className="product-card">
      <img className="product-card-img" src={imageUrl} alt={name} />
      <div className="product-card-details">
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
