import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from './pizzas';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
        <Header></Header>
            <Container className="mt-4">
                <Row className="justify-content-center">        
                {pizzas.map((pizza) => (
                    <Col md={4} className="mb-4 d-flex">
                        <CardPizza key={pizza.id} pizza={pizza} />
                    </Col>
                ))}               
                </Row>
            </Container>
    </>
  );
};


export default Home;