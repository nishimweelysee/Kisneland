import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogSection extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <div className="blog-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="single-blog single-blog-wrap style-two">
		          <div className="thumb single-blog-left-wrap">
		            <img src={publicUrl+"assets/img/mettings/10.png"} alt="blog" />
		          </div>
		          <div className="single-blog-details single-blog-right-wrap">
		            <Link className="tag" to="/mettings-details">N'djamena</Link>
		            <p className="date">Tous les jours</p>
		            <h4 className="title">Pourquoi devriez-vous goûter la cuisine KisneLand ?</h4>
		            <p className="content">la cuisine est notre passion et notre restaurant propose la meilleure cuisine de la ville, savourez le goût de la cuisine kisneLand</p>
		            <Link className="btn btn-yellow" to="/mettings-details"><span>En Savoir plus<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="row">
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/mettings/11.png"} alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/mettings-details">Salle de réunion 1</Link>
		                  <p className="date">Tous les jours</p>
		                  <h4 className="title">Pourquoi devriez-vous préférer nos salles de réunion</h4>
		                  <Link className="btn btn-yellow" to="/mettings-details"><span>En Savoir plus<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/mettings/12.png"} alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/mettings-details">Salle de réunion 2</Link>
		                  <p className="date">Tous les jours</p>
		                  <h4 className="title">Pourquoi devriez-vous préférer nos salles de réunion</h4>
		                  <Link className="btn btn-yellow" to="/mettings-details"><span>En Savoir plus<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/mettings/13.png"} alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/mettings-details">Salle de réunion 3</Link>
		                  <p className="date">Tous les jours</p>
		                  <h4 className="title">Pourquoi devriez-vous préférer nos salles de réunion</h4>
		                  <Link className="btn btn-yellow" to="/mettings-details"><span>En Savoir plus<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/mettings/14.png"} alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/mettings-details">Salle de réunion 4</Link>
		                  <p className="date">Tous les jours</p>
		                  <h4 className="title">Pourquoi devriez-vous préférer nos salles de réunion</h4>
		                  <Link className="btn btn-yellow" to="/mettings-details"><span>En Savoir plus<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSection;
