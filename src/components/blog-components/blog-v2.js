import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <div className="blog-list-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/1.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/2.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Africa</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Aliquam faucibus, nec commodo</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/3.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/4.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Iseland</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Duis pretium gravida enim, vel maximus</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/5.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Duis pretium gravida enim</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/6.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/7.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Etiam convallis elementum sapien</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/8.png"} alt="blog" />
		            <a className="tag" to="/mettings">Asia</a>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Duis porta, ligula rhoncus euismod</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/mettings/9.png"} alt="blog" />
		            <Link className="tag" to="/mettings">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/mettings-details">Aliquam faucibus, nec commodo</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/mettings-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-12  text-md-center text-left">
		        <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
		          <ul>
		            <li><a className="prev page-numbers" href="#"><i className="la la-long-arrow-left" /></a></li>
		            <li><span className="page-numbers">1</span></li>
		            <li><span className="page-numbers current">2</span></li>
		            <li><a className="page-numbers" href="#">3</a></li>
		            <li><a className="page-numbers" href="#">4</a></li>
		            <li><a className="next page-numbers" href="#"><i className="la la-long-arrow-right" /></a></li>
		          </ul>                          
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default BlogV2;
