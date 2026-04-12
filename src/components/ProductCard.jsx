function ProductCard() {
  return (
    <div className="product-card">
      <img className="product-card-img" src="/products/keyboard.jpg" alt="" />
      <div className="product-card-details">
        <p className="product-card-name">Keyboard</p>
        <p className="product-card-price">$12.33</p>
        <p className="product-card-description">Membrane Keyboard</p>
      </div>
    </div>
  );
}

export default ProductCard;
