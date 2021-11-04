import ProductList from "./parts/ProductList";

const Shop = () => {
  return (
    <div>
      <div id="shop">
        <div className="container">
          <h1 className="text-center">Nuestros productos</h1>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default Shop;
