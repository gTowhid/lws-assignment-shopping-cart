import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
// import CartPage from './components/CartPage';

function App() {
  return (
    <div>
      <Navbar />;
      <main class="py-16">
        <Homepage />
        {/* <CartPage /> */}
      </main>
    </div>
  );
}

export default App;
