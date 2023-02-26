import Products from './Products';
import AdminPanel from './AdminPanel';

export default function Homepage() {
  return (
    <div class="productWrapper">
      <Products />
      <div>
        <AdminPanel />
      </div>
    </div>
  );
}
