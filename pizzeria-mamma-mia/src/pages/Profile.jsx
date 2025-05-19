import './Profile.css'

function Profile() {
  return (
    <div className="profile-div-container">
      <h1 className='title-profile'><strong>Usuario: Pepitopzzin</strong></h1>
      <p>Email: pizza@pizza.com</p>
       <button type="submit" className="btn btn-primary">Cerrar sesión</button>
    </div>
  );
}

export default Profile;