import Button from 'react-bootstrap/Button';


const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav>
        <h4>Pizzeria Mamma Mia</h4>
      <Button>🍕 Home</Button>
      {token ? (
        <>
          <Button>🔓 Profile</Button>
          <Button>🔒 Logout</Button>
        </>
      ) : (
        <>
          <Button>🔐 Login</Button>
          <Button>🔐 Register</Button>
        </>
      )}
      <Button>🛒 Total: ${total.toLocaleString()}</Button>
    </nav>
    );
  };
  
  export default Navbar;