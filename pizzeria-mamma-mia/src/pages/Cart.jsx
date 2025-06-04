import { Button, Card, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cart, increment, decrement, total } = useCart();
  const { token } = useUser(); 

  const PizzaCart = cart.filter((pizza) => pizza.quantity > 0);

  if (PizzaCart.length === 0) {
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

       
        <Button
          className="boton_pago btn btn-dark m-2 text-center"
          disabled={!token}
        >
          Pagar
        </Button>
      </div>
    </Card>
  );
};

export default Cart;
