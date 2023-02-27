import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link className="intro-cat" to="/about">Manèges</Link>
				          </h4>
				          <p> KisneLand, nous avons différents Manèges pour les enfants où ils peuvent profiter du bonheur d'une journée entière au meilleur prix, amenez et laissez vos enfants s'amuser au mieux de leur vie</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link className="intro-cat" to="/about">Piscine</Link>
				          </h4>
				          <p>KisneLand offre le meilleur de l'heure de la piscine, avec une variété d'abonnements différents allant des abonnements quotidiens aux abonnements mensuels voire annuels, et nous sommes ouverts du lundi au dimanche</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link className="intro-cat" to="/about">restaurant</Link>
				          </h4>
				          <p>la cuisine est notre passion et notre restaurant propose la meilleure cuisine de la ville, savourez le goût de la cuisine kisneLand</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Intro