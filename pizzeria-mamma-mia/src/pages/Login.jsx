
import React, { useState } from 'react';
import './Login.css'

const  Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
  
      if (!email || !password) {
        setError('Todos los campos son obligatorios.');
        return;
      }
  
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      // Si la operación es exitosa:
      setSuccess('Inicio de sesión exitoso.');
      // Si hay un error:
      // setError('Email o contraseña incorrectos.');
    };
  
    return (
      <div className = "login-div-container">
        <h1 className='title-login'><strong>Login</strong></h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit} className='login-form-container'>
          <div className="mb-3">
            <label htmlFor="email" className="login-form-input">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
               placeholder='pizza@pizza.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="login-form-input">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
   
    );
}
export default Login;