
import React, { useContext, useState } from 'react'
import './Navbar.css'
import './Error.jsx'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState(""); // added for search
  const { food_list, getTotalCartAmount } = useContext(StoreContext);

  // simple filter function
  const filteredItems = food_list.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='navbar1'>
      <div className='navbar'>
        <ul className="navebar-menu">
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : " "}>Home</Link>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>About</a>
          <Link to="/error">Offers</Link>
          <a href='#app-download' onClick={() => setMenu("mobile app")} className={menu === "mobile app" ? "active" : ""}> 🡇 </a>
        </ul>

        <Link to='/'> <img src={assets.EEAT_logo} alt="" className="logo_img" /></Link>

        <div className="navbar-right">
          
          <div className="search-section">
            <img
              src={assets.search_icon}
              alt="search"
              className="search-icon"
              onClick={() => {
                const searchBox = document.querySelector('.search-box');
                if (searchBox) searchBox.classList.toggle('active');
              }}
            />
            <div className="search-box">
              <input
                type="text"
                placeholder="Search food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Link to="https://maps.google.com/"> <img src={assets.location1} alt="" /></Link>
          </div>

          <div className="navbar-search-icon">
            <Link to='/cart'> <img src={assets.cart_2} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>

    
      {searchTerm && (
        <div className="search-results">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item._id} className="search-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p className="no-result">No items found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
