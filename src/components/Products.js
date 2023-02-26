import { useSelector } from 'react-redux';
import Product from './Product';

export default function Products() {
  const products = useSelector((state) => state);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length !== 0
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : 'NO PRODUCT TO SHOW'}
    </div>
  );
}
