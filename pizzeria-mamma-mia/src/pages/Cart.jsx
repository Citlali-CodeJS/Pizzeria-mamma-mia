import { useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cart, increment, decrement, total, clearCart } = useCart();
  const { token } = useUser();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const PizzaCart = cart.filter((pizza) => pizza.quantity > 0);

  const handleCheckout = async () => {
    if (!token) {
      setErrorMsg('Debes iniciar sesión para realizar la compra.');
      return;
    }
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await fetch('/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,  
        },
        body: JSON.stringify({ items: PizzaCart }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar la compra');
      }

      await response.json();

      setSuccessMsg('Compra realizada con éxito. ¡Gracias por tu compra😄!');
      clearCart();
    } catch (error) {
      setErrorMsg('No se pudo completar la compra. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (PizzaCart.length === 0 && !successMsg ) {
    return <p className="text-center mt-5">Tu carrito está vacío 🛒</p>;
  }

  return (
    <Card className="m-5 border border-dark pt-5 text-center d-flex align-items-center">
      <h5>Detalles del pedido:</h5>
      <div className="card-container">
        {PizzaCart.map((pizza) => (
          <div className="pizza-cart" key={pizza.id}>
            <Card.Img src={pizza.img} alt={pizza.name} />
            <h6><strong>{pizza.name}</strong></h6>
            <h6>${pizza.price}</h6>
            <div className="cart-btn">
              <Button onClick={() => decrement(pizza.id)} className="btn btn-dark m-2">-</Button>
              <h6>{pizza.quantity}</h6>
              <Button onClick={() => increment(pizza.id)} className="btn btn-dark m-2">+</Button>
            </div>
          </div>
        ))}

        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Pizza</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {PizzaCart.map((pizza) => (
              <tr key={pizza.id}>
                <td>{pizza.name}</td>
                <td>{pizza.quantity}</td>
                <td>${(pizza.price * pizza.quantity).toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" className="text-end"><strong>Total:</strong></td>
              <td className="table-secondary"><strong>${total.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </Table>

        {errorMsg && <p className="text-danger">{errorMsg}</p>}
        {successMsg && <p className="text-success">{successMsg}</p>}

        <Button
          className="boton_pago btn btn-dark m-2 text-center"
          disabled={!token || loading}
          onClick={handleCheckout}
        >
          {loading ? 'Procesando...' : 'Pagar'}
        </Button>
      </div>
    </Card>
  );
};

export default Cart;
