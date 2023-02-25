import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/2.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
				            </Link>
				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></a>
				              </li>
				              <li>
				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
				              </li>
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">Contact us</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>N'damena</span>
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>ndjpark@gmail.com</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
				                +66 43 54 32 12
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/about">About Us</Link></li>
				            <li><Link to="/contact">Contact</Link></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><a href="#"><img height={"90px"} width={"90px"} src={publicUrl+"assets/img/mettings/12.png"} alt="img" /></a></li>
				            <li><a href="#"><img height={"90px"} width={"90px"}  src={publicUrl+"assets/img/mettings/13.png"} alt="img" /></a></li>
				            <li><a href="#"><img height={"90px"} width={"90px"}  src={publicUrl+"assets/img/restourent/pexels-chan-walrus-941861.jpg"} alt="img" /></a></li>
				            <li><a href="#"><img height={"90px"} width={"90px"} src={publicUrl+"assets/img/games/1.png"} alt="img" /></a></li>
				            <li><a href="#"><img height={"90px"} width={"90px"} src={publicUrl+"assets/img/games/2.png"} alt="img" /></a></li>
				            <li><a href="#"><img height={"90px"} width={"90px"} src={publicUrl+"assets/img/games/3.png"} alt="img" /></a></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © Kisneland 2019 All rights reserved. Powered with by <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></a>
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1