import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/inventory/actions';

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={product.imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product.productName}</h4>
        <p className="lws-productCategory">{product.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{product.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{product.inventory}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => dispatch(addToCart(product.id))}
          disabled={!product.inventory}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
