import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { useState } from 'react';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [navToCart, setNavToCart] = useState(false);

  return (
    <Provider store={store}>
      <div>
        <Navbar setNavToCart={setNavToCart} />;
        <main class="py-16">
          {!navToCart && <Homepage />}
          {navToCart && <CartPage />}
        </main>
      </div>
    </Provider>
  );
}

export default App;
