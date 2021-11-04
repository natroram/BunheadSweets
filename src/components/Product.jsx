const Product = ({ product }) => {
  return (
    <li className="product row">
      <div className="col-12 col-md-3">
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className="text-align-left col-12 col-md-9">
        <h2 className="h2">{product.name}</h2>
        <p className="badge bg-secondary">{product.category}</p>
        <p className="price">$ {product.price}</p>
        <p>{product.description}</p>
      </div>
      <hr></hr>
    </li>
  );
};

export default Product;
