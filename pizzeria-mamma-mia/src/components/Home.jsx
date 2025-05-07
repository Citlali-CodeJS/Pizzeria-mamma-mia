import { useState, useEffect } from "react";
import Header from './Header';
import CardPizza from './CardPizza';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const respuesta = await fetch ("http://localhost:5000/api/pizzas")
    const pizzas = await respuesta.json()

    setPizzas(pizzas)
  }

  useEffect (() => {
    getPizzas()
  }, [])

  return (
    <>
        <Header></Header>
        <Container className="mt-4">
          <Row className="justify-content-center">        
            {pizzas.map((pizza) => (
              <Col md={4} className="mb-4 d-flex" key={pizza.id}>
                <CardPizza 
                  id={pizza.id}
                  img={pizza.img}
                  name={pizza.name}
                  desc={pizza.desc}                         
                  ingredients={pizza.ingredients}                         
                  price={pizza.price}/>
              </Col>
            ))}               
          </Row>
            </Container>
    </>
  );
};


export default Home;

