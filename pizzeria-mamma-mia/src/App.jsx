import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './components/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { useUser } from './context/UserContext'; 
import './App.css';

function App() {
  const { token } = useUser(); 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Ruta protegida: si no hay token, redirige a /login */}
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
