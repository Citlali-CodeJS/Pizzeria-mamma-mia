import { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al cargar la pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

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
                <Button className="btn btn-dark">Añadir 🛒</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;



