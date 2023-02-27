import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Review extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-review-area client-review-area-home pd-top-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
			          <div className="client-review-thumb">
			            <img src={publicUrl+"assets/img/restourent/client-review.png" }alt="review" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
			          <p className="sub-title">Restaurant Reviews</p>
			          <h3 className="location-name">Restaurant</h3>
			          <div className="tp-review-meta">
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="fa fa-star" />
			            <span>4.0</span>
			          </div>
			          <p>
					  la cuisine est notre passion et notre restaurant propose la meilleure cuisine de la ville, savourez le goût de la cuisine kisneLand
					  </p>
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/client/1.png"} alt="client" />
			            </div>
			            <div className="media-body">
			              <h6>Jasmine Woodkin</h6>
			              <p>cuisinier</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Review