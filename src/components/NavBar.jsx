import CartWidget from './CartWidget';
import logo from '../assets/Logo.jpg'; // guardá tu logo en src/assets/logo.png

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {/* LOGO */}
        <div className="navbar__brand">
          <img src={logo} alt="Logo Ferretería El Cosito" className="navbar__logo" />
          <span>Ferretería El Cosito</span>
        </div>

        {/* MENU */}
        <ul className="navbar__menu">
          <li><a href="#">Ferretería</a></li>
          <li><a href="#">Herramientas</a></li>
          <li><a href="#">Pinturas</a></li>
        </ul>

        {/* CARRITO */}
        <CartWidget />
      </nav>
    </header>
  );
}
