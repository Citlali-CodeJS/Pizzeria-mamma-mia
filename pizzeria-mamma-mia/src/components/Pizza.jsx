import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams(); 
  const { getPizzaById, loading } = usePizzas();
  const { addToCart } = useCart();

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;

  const pizza = getPizzaById(id); 

  if (!pizza) return <p className="text-center mt-5">Pizza no encontrada</p>;

  const handleAddToCart = () => {
    const { id, name, price, img } = pizza;
    addToCart({ id, name, price, img });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6} className="mb-4 d-flex">
          <Card className="border border-dark w-100">
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title className="text-center">
                <h5>{pizza.name}</h5>
                <h6>{pizza.desc}</h6>
              </Card.Title>
              <hr />
              <ul>
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>🍕 {ingredient}</li>
                ))}
              </ul>
              <hr />
              <Card.Text className="text-center">
                <strong>Precio:</strong> ${pizza.price}
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Button variant="outline-dark">Ver más</Button>
                <Button className="btn btn-dark" onClick={handleAddToCart}>
                  Añadir 🛒
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;