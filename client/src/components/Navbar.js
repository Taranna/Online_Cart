import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Star Lite</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        {/* <li>
          <Link to="/" >Shop</Link>
        </li> */}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;






























// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = ({ click }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar_logo">
//         <h2>Shopping Cart</h2>
//       </div>
//       <ul className="navbar_links">
//         <li>
//           <Link to="/cart" className="cart_link">
//             <i className="fas fa-shopping-cart"></i>
//             <span>
//               Cart
//               <span className="cart_badge">0</span>
//             </span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/">Shop</Link>
//         </li>
//       </ul>
//       <div className="hamburger_menu" onClick={click}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
