import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="contact-area pd-top-108">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="section-title text-lg-center text-left">
                        <h2 className="title">Entrer en contact!</h2>
                        <p>Vous pouvez nous contacter sur notre numéro de téléphone direct ou via nos différentes plateformes de médias sociaux</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                      <div className="thumb">
                        <img src={publicUrl+"assets/photo/IMG-1075.jpg"} alt="img" />
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                      <form className="tp-form-wrap">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Noms</span>
                              <input type="text" name="name" />
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Numero</span>
                              <input type="text" name="number"/>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Email</span>
                              <input type="text" name="email"/>
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                              <span className="single-input-title">Message</span>
                              <textarea defaultValue={""} name="message" />
                            </label>
                          </div>
                          <div className="col-12">
                            <input type="submit" className="btn btn-yellow" value="Envoyer le message" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info-area pd-top-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 order-lg-12">
                      <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124828.22735883227!2d15.057458950000003!3d12.120218249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2std!4v1668941284774!5m2!1sen!2std" />
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                      <div className="contact-info bg-gray">
                        <p>
                          <i className="fa fa-map-marker" /> 
                          <span>Ndjamena Street, Suite 2000 Farcha, TX 24141</span>
                        </p>
                        <p>
                          <i className="fa fa-clock-o" /> 
                          <span>Heure de bureau 8:00 a 7:00 Dimanche 10:00 a 5:00</span>
                        </p>
                        <p>
                          <i className="fa fa-envelope" /> 
                          <span>Email: <span>kisneland.td@gmail.com</span></span>
                        </p>
                        <p>
                          <i className="fa fa-phone" /> 
                          <span>
                            contact: <span>(+235) 65000536</span> <br />
                            telephone: <span>(+235) 65000536</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default Contact