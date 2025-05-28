import { createContext, useContext, useEffect, useState } from "react";

const PizzaContext = createContext();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPizzas = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      setPizzas(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar las pizzas:", error);
    }
  };

  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, getPizzaById, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};