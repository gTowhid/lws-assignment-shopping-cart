import { useDispatch } from 'react-redux';
import {
  increaseCart,
  decreaseCart,
  deleteCartProduct,
} from '../redux/inventory/actions';

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  return product.cartQuantity !== 0 ? (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={product.imageUrl} alt="product" />

        <div className="space-y-2">
          <h4 className="lws-cartName">{product.productName}</h4>
          <p className="lws-cartCategory">{product.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{product.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => dispatch(increaseCart(product.id))}
            disabled={!product.inventory}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{product.cartQuantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => dispatch(decreaseCart(product.id))}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p className="text-lg font-bold">
          BDT{' '}
          <span className="lws-calculatedPrice">
            {product.cartQuantity * product.price}
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => dispatch(deleteCartProduct(product.id))}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  ) : null;
}
