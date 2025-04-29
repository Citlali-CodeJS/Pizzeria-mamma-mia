import { useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import pizzaCart from './pizzas';

const Cart = () => {
    const [cart, setCart] = useState(
        pizzaCart.map((pizza) => ({ ...pizza, quantity: 0 }))
    );

    const addPizza = (index) => { //Permite incorporar pizza al carrito
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
    };

    const removePizza = (index) => { //Permite eliminar pizza del carrito
        const newCart = [...cart];
        if (newCart[index].quantity > 0) {
            newCart[index].quantity -= 1;
            setCart(newCart);
        }
    };

    const Total = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
    };

    const PizzaCart = cart.filter((pizza) => pizza.quantity > 0); 

    return (    
      <Card  className="m-5 border border-dark pt-5 text-center d-flex align-items-center">
        <h5>Detalles del pedido:</h5>
        <div className="card-container"> 
           {cart.map((pizza, index) => (
            <div className="pizza-cart" key={pizza.id}>  
              <Card.Img src={pizza.img} alt={pizza.name} />                                
                <h6><strong>{pizza.name}</strong></h6>
                <h6>${pizza.price}</h6>
                  <div className="cart-btn">
                    <Button onClick={() => removePizza(index)} className="btn btn-dark m-2">-</Button>
                    <h6>{pizza.quantity}</h6>
                    <Button onClick={() => addPizza(index)} className="btn btn-dark m-2">+</Button>
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
                    <td>${(pizza.price * pizza.quantity)}</td>
                  </tr>
                 ))}
                  <tr>
                    <td colSpan="2" className="text-end"><strong>Total:</strong></td>
                    <td class="table-secondary"><strong>${Total()}</strong></td>
                </tr>
              </tbody>
            </Table>
            <Button className="boton_pago btn btn-dark m-2 text-center">Pagar</Button>
        </div>
      </Card>
    );
  };

export default Cart;