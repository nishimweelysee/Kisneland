import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area viaje-go-top">
			  <div className="banner-slider">
			  <div className="banner-slider-item banner-bg-0">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges  <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
				<div className="banner-slider-item banner-bg-4">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
				<div className="banner-slider-item banner-bg-5">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-2">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges  <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
				<div className="banner-slider-item banner-bg-6">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Visiter</p>
			                  <h2 className="banner-title s-animate-2">KisneLand  <br /> </h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=f5Ov_n0crZ8" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-Access-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Meilleur Prix</p>
			                      <h5>à partir de 5000 <small>CFA</small></h5>
			                      <p className="tp-price-meta-details">accès tous les jours <span></span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>Meilleur</p>
			                      <h2>Manèges</h2>
			                      <p className="tp-price-meta-details">Manèges  <span>à choisir</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Date de Visite</p>
			                      <h5>tous les jours</h5>
			                      <p className="tp-price-meta-details">Matin <span>ou Soir</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="banner-social-meta">
			    <div className="banner-slider-dots" />
			    <ul className="social-icon">
			      <li>
			        <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook" /></a>
			      </li>
			      <li>
			        <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter" /></a>
			      </li>
			      <li>
			        <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
			      </li>
			    </ul>
			  </div>
			  <div className="container">
			    <div className="banner-slider-controls">
			      <div className="slider-nav tp-control-nav" />
			      {/*slider-nav*/}
			      <div className="tp-slider-extra slider-extra">
			        <div className="text">
			          <span className="first">01</span>
			          <span className="devider">/</span>
			          <span className="last" />
			        </div>
			      </div>
			      {/*slider-extra*/}
			    </div>
			  </div>
			</div>
        }
}

export default Banner