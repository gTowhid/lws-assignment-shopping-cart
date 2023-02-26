import { useSelector } from 'react-redux';
import BillDetails from './BillDetails';
import CartItem from './CartItem';

export default function CartPage() {
  const products = useSelector((state) => state);

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>

        <div>
          <BillDetails />
        </div>
      </div>
    </div>
  );
}
