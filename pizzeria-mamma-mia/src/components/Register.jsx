
import React, { useState } from 'react';

import './Register.css'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Aquí iría la lógica para enviar los datos al backend
    // Si la operación es exitosa:
    setSuccess('Registro exitoso.');
    // Si hay un error:
    // setError('Error al registrar. Inténtalo de nuevo.');
  };

  return (
    <div className = "register-div-container">
      <h1 className='title-register' > <strong>Registro</strong></h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} className='register-form-container'>
        <div className="mb-3">
          <label htmlFor="email" className="register-form-input">Email</label>
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
          <label htmlFor="password" className="register-form-input">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="register-form-input">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;