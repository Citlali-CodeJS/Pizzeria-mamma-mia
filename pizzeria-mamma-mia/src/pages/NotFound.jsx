import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  return (
  
     <Container className="container-NF">
    <div className='notfound-div-container'>
   
         <h1 className='title-notfound' >404 - Página no encontrada</h1>
         <img className='imgnf'  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHEzNjg1dng3djNlb3VmaXV4MWpvdWJsNnMxeHJ2cXZnbm14cHVrZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FYUnDtud95kMKCovAY/giphy.gif"
          alt="page notFound" />
      <Link className='link' to="/">Volver a la página principal</Link>
     
  
   </div>
        </Container>
  
  );
}

export default NotFound;