import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { useState } from 'react';
import CartPage from './components/CartPage';

function App() {
  const [navToCart, setNavToCart] = useState(false);

  return (
    <div>
      <Navbar setNavToCart={setNavToCart} />;
      <main class="py-16">
        {!navToCart && <Homepage />}
        {navToCart && <CartPage />}
      </main>
    </div>
  );
}

export default App;
