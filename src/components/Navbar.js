import logo from '../assets/logo.png';

export default function Navbar({ setNavToCart }) {
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <button
              type="submit"
              className="navHome"
              id="lws-home"
              onClick={() => setNavToCart(false)}
            >
              {' '}
              Home{' '}
            </button>
            <button
              type="submit"
              className="navCart"
              id="lws-cart"
              onClick={() => setNavToCart(true)}
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
