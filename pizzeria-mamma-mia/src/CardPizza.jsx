import Button from 'react-bootstrap/Button';

   


   const CardPizza = ({ name, ingredients, price,img }) => {
    return(
        <>
       
        <img src={img} alt={name} />
       
          <h5>Pizza{name}</h5>
        
          <p className="mb-0">Ingredientes:</p>
          <p className="card-text mb-0">
            🍕 {ingredients.join(", ")}.
          </p>
        
        <h4>
          Precio: ${price.toLocaleString()}
        </h4>
         
          <Button> Ver más 👀</Button>
          <Button>Añadir 🛒</Button>
          </>
    );
   };