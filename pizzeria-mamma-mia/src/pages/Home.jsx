import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { Container, Row, Col } from "react-bootstrap";
import { usePizzas } from '../context/PizzaContext'; 
import './Home.css';

const Home = () => {
  const { pizzas, loading } = usePizzas(); 

  if (loading) return <p className="text-center mt-5">Cargando pizzas...</p>;

  return (
    <>
      <Header />
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
                price={pizza.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;