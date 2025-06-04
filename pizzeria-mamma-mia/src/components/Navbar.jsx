import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; 

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav>
      <h4>Pizzería Mamma Mia</h4>
      <div>
        <Link to="/">
          <Button>🍕 Home</Button>
        </Link>

     
        {!token && (
          <>
            <Link to="/register">
              <Button>👤 Register</Button>
            </Link>
            <Link to="/login">
              <Button>🔐 Login</Button>
            </Link>
          </>
        )}

      
        {token && (
          <>
            <Link to="/profile">
              <Button>🔓 Profile</Button>
            </Link>
            <Button onClick={logout}>🔒 Logout</Button>
          </>
        )}

        <Link to="/cart">
          <Button>🍕 Cart</Button>
        </Link>

        
        <Link to="/pizza/p001">
          <Button>🍕 Pizza</Button>
        </Link>
      </div>

      <div>
        <Link to="/cart">
          <Button className="Total">
            🛒 Total: ${total.toLocaleString()}
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
