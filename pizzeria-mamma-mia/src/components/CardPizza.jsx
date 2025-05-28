import { useCart } from "../context/CartContext"; 

const CardPizza = ({ id, name, ingredients, price, img }) => {
  const { addToCart } = useCart(); 

  const handleAdd = () => {
    const pizza = { id, name, price, img };
    addToCart(pizza);
  };

  return (
    <div className="card-container">
      <div className="card card-pizza">
        <img src={img} alt={name} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 className="card-title"> Pizza {name}</h5>
          <div>
            <p style={{ color: 'gray', fontSize: 'larger' }}>
              Ingredientes:</p>
            <p style={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px'
            }}>
              🍕 {ingredients.join(", ")}.
            </p>
          </div>
          <h4 style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.8rem'
          }}>
            Precio: ${price.toLocaleString()}
          </h4>
          <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingBottom: '10px'
          }}>
            <button className="btn btn-outline-dark">Ver más 👀</button>
            <button className="btn btn-dark" onClick={handleAdd}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
   



   