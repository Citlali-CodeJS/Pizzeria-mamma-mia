import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {useCart} from '../context/CartContext';

const Navbar = () => {
  const {total} = useCart();
  const token = false;

  return (
    <nav>
        <h4>Pizzeria Mamma Mia</h4>
        <div>
        <Link to="/">
          <Button>🍕 Home</Button>
        </Link>
         <Link to="/register">
          <Button>👤Register</Button>
        </Link>
         <Link to="/login">
          <Button>🔐 Login</Button>
        </Link>
         <Link to="/cart">
          <Button>🍕Cart </Button>
        </Link>                  
        <Link to="/pizza/p001">
          <Button>🍕Pizza </Button>
        </Link> 
        <Link to="/profile">
          <Button>🔓 Profile</Button>
        </Link>
        <Link to="/404">
          <Button>🔒 Logout</Button>
        </Link>
      </div>
    
      <div>
        <Link to="/cart">
          <Button className="Total">
            🛒 Total: $
            {total.toLocaleString()}
            </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;