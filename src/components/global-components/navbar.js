import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
			  <div className="container nav-container">
			    <div className="responsive-mobile-menu">
			      <div className="mobile-logo">
			        <Link to="/">
			          <img src={publicUrl+"assets/img/sticky-logo.png"} alt={ imgattr } />
			        </Link>
			      </div>
			      <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggle-icon">
			          <span className="line" />
			          <span className="line" />
			          <span className="line" />
			        </span>
			      </button>
			      <div className="nav-right-content">
			        <ul className="pl-0">
			          <li className="top-bar-btn-booking">
			            <Link className="btn btn-yellow" to="/tour-details">Reserve maintenant <i className="fa fa-paper-plane" /></Link>
			          </li>
			          <li className="tp-lang">
			            <div className="tp-lang-wrap">
			              <select className="select single-select">
						  	<option value={1}> </option>
			                <option value={1}> </option>
			              </select>
			            </div>
			          </li>
			          <li className="search">
			            <i className="ti-search" />
			          </li>
			          <li className="notification">
			            <a className="signUp-btn" href="#">
			              <i className="fa fa-user-o" />
			            </a>
			          </li>
			        </ul>
			      </div>
			    </div>
			    <div className="collapse navbar-collapse" id="tp_main_menu">
			      <div className="logo-wrapper desktop-logo">
			        <Link to="/" className="main-logo">
			          <img src={publicUrl+"assets/img/logo.png"} alt="logo" />
			        </Link>
			        <Link to="/" className="sticky-logo">
			          <img src={publicUrl+"assets/img/sticky-logo.png"} alt="logo" />
			        </Link>
			      </div>
			      <ul className="navbar-nav">
			        <li>
			          <Link to="/">Accueil</Link>
			          {/* <ul className="sub-menu">
			            <li><Link to="/">Home 01</Link></li>
			            <li><Link to="/home-v2">Home 02</Link></li>
			            <li><Link to="/home-v3">Home 03</Link></li>
			          </ul> */}
			        </li>
			        <li>
			          <Link to="/about">À propos de nous</Link>
			        </li>
			        {/* <li className="menu-item-has-children">
			          <a href="#">Pages</a>
			          <ul className="sub-menu">
			            <li><Link to="/tour-list">Games List</Link></li>
			            <li><Link to="/tour-list-v2">Games List 02</Link></li>
			            <li><Link to="/tour-list-v3">Games List 03</Link></li>
			            <li><Link to="/tour-details">Games Details</Link></li>
			            <li><Link to="/games">Destination List</Link></li>
			            <li><Link to="/games-v2">Destination List 2</Link></li>
			            <li><Link to="/destination-details">Destination Details</Link></li>
			            <li><Link to="/gallery">Gallery</Link></li>
			            <li><Link to="/gallery-details">Gallery Details</Link></li>
			            <li><Link to="/comming-soon">Comming soon</Link></li>
			            <li><Link to="/error">404</Link></li>
			            <li><Link to="/faq">FAQ</Link></li>
			            <li><Link to="/user-profile">User Profile</Link></li>
			          </ul>
			        </li>
			        <li className="menu-item-has-children">
			          <Link to="/mettings">Blog</Link>
			          <ul className="sub-menu">
			            <li><Link to="/mettings">Blog</Link></li>
			            <li><Link to="/mettings-v2">Blog 02</Link></li>
			            <li><Link to="/mettings-v3">Blog 03</Link></li>
			            <li><Link to="/mettings-details">Blog Details</Link></li>
			          </ul>
			        </li> */}
			        <li>
			          <Link to="/contact">Contact</Link>
			        </li>
			      </ul>
			    </div>
			    <div className="nav-right-content">
			      <ul>
			        {/* <li>
			          <Link className="btn btn-yellow" to="/tour-details">Reserve maintenant <i className="fa fa-paper-plane" /></Link>
			        </li> */}
			        <li className="tp-lang">
			          <div className="tp-lang-wrap">
			            <select className="select single-select">
			              <option value={1}> </option>
			              <option value={2}> </option>
			            </select>
			          </div>
			        </li>
			        <li className="search">
			          <i className="ti-search" />
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>

        )
    }
}


export default Navbar