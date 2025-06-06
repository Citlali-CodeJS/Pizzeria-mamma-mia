import React, { useEffect } from 'react';
import './Profile.css';
import { useUser } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { email, getProfile, logout, token } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    } else {
      getProfile()
        .catch(() => {
          logout();
          navigate('/login');
        });
    }
  }, [token, getProfile, logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-div-container">
      <h1 className="title-profile"><strong>Usuario</strong></h1>
      <p>Email: {email}</p>
      <button onClick={handleLogout} className="btn btn-primary">Cerrar sesión</button>
    </div>
  );
}

export default Profile;
