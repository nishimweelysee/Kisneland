import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="about-section pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 align-self-center">
                    <div className="section-title mb-lg-0">
                      <h2 className="title">Kisneland <br /> Tchad</h2>
                      <p>KisneLand est une aire de jeux pour enfants pleine de jeux les plus étonnants pour les enfants, et propose différents abonnements à la piscine pour enfants et adultes, KisneLand est au cœur de N'djamena, ouvert tous les jours de la semaine et propose plusieurs offres spéciales le week-end, KisneLand a la meilleure cuisine de la ville, visitez notre restaurant et profitez-en au maximum.</p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2">
                    <div className="thumb about-section-right-thumb">
                      <img src={publicUrl+"assets/photo/IMG-1112.jpg"} alt="img" />
                      <img className="about-absolute-thumb" src={publicUrl+"assets/photo/IMG-1085.jpg"} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About