import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import games from '../../storage/games.json';
import emailjs from 'emailjs-com';

const  GameDetails=(props)=> {
  const form = useRef();
  const [state,setState]=useState({
    name: "",
      email: "",
      phone: "",
      startDate: null,
      endDate: null,
      message: ""
  })

  const sendEmail = async (e)=> {
    const SERVICE_ID = "service_4vbdd3r";
    const TEMPLATE_ID = "template_7zvcq9k";
    const USER_ID = "rJ254mqupM40Zjf-f";
    console.log(e,form.current);
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

    let publicUrl = process.env.PUBLIC_URL + '/assets/'
    let imagealt = 'image'

    return <div className="tour-details-area mg-top--70">
      <div className="tour-details-gallery">
        <div className="container-bg bg-dark-blue">
          <div className="container">
            <div className="gallery-filter-area row">
              <div className="gallery-sizer col-1" />
              {/* gallery-item */}
              <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                <div className="tp-gallery-item-img">
                  <div className="thumbnails">
                    <img src={publicUrl + 'img/' + props.game.mainPhoto} alt="image" />
                    <div className="video-popup-btn">
                      <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {
                props.game.photos.map((photo, index) => (
                  <div className={`tp-gallery-item  ${photo.class}`} key={index}>
                    <div className="tp-gallery-item-img">
                      <a href="#" data-effect="mfp-zoom-in">
                        <img src={publicUrl + photo.img} alt="image" />
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="details">
                  <p className="location mb-0"><i className="fa fa-map-marker" />Tchad</p>
                  <h4 className="title">Ndjamena</h4>
                  <p className="content">3 days 2 person</p>
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <span>{props.game.review}</span>
                  </div>
                  <div className="all-tags">
                    <a href="#">Adventures</a>
                    <a href="#">Local special ties</a>
                    <a href="#">Natural</a>
                    <a href="#">Game</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="book-list-warp">
                  <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                  <div className="tp-price-meta">
                    <p>Price</p>
                    <h2>{props.game.price}... <small>   CFA</small></h2>
                  </div>
                </div>
                <ul className="tp-list-meta border-tp-solid">
                  <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                  <li><i className="fa fa-clock-o" /> 4 Days</li>
                  <li><i className="fa fa-users" />2 Person</li>
                  <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                  <li><i className="fa fa-star" /> {props.game.review}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tour-details-wrap">
              <h4 className="single-page-small-title">More Info</h4>
              <p>{props.game.content}</p>
              <div className="package-included-area">
                <h4 className="single-page-small-title">Included</h4>
                <div className="row">
                  {
                    Object.values(props.game.included).map(inc => (
                      <div key={inc.id} className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img src={publicUrl + "img/" + inc.icon} alt="icons" />
                          <h6>{inc.name}</h6>
                          <p>{inc.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="package-included-location">
                <div className="row">
                  {
                    games.map(g => (
                      <div key={g.id} className="col-lg-4 col-md-4">
                        <div className="single-blog">
                          <div className="thumb">
                            <img src={publicUrl + "img/" + g.mainPhoto} alt="blog" />
                          </div>
                          <div className="single-blog-details">
                            <h4 className="title">{g.name}</h4>
                            <p className="content">{g.title}</p>
                            <Link className="btn-read-more" to={{ pathname: "/game-details", search: 'id=' + g.id }}><span>Show More<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-area sidebar-area-4">
              <div className="widget tour-list-widget">
                <form ref={form} onSubmit={e=>sendEmail(e)} className="widget-tour-list-meta">
                  <div className="single-widget-search-input-title"><i className="fa fa-user" /> Name</div>
                  <div className="single-widget-search-input">
                    <input name='names' type="text" onInput={e => setState({ name: e.target.value })} value={state.name} placeholder="Name" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                  <div className="single-widget-search-input">
                    <input name='email' type="email" onInput={e => setState({ email: e.target.value })} value={state.email} placeholder="Email" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Phone</div>
                  <div className="single-widget-search-input">
                    <input name='phone' type="tel" onInput={e => setState({ phone: e.target.value })} value={state.phone} placeholder="Phone" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                  <div className="single-widget-search-input">
                    <input name='startDate' type="text" onChange={e => setState({ startDate: e.target.value })} value={state.startDate} className="departing-date custom-select" placeholder="Departing" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                  <div className="single-widget-search-input">
                    <input name='endDate' type="text" onChange={e => setState({ endDate: e.target.value })} value={state.endDate} className="returning-date custom-select" placeholder="Returning" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Message</div>
                  <div className="single-widget-search-input">
                    <textarea name='message' placeholder="Type" onInput={e => setState({ message: e.target.value })} value={state.message} defaultValue={""} />
                  </div>
                  <input name='item' value={props.game.name} type="hidden" />
                  <div className="text-lg-center text-left">
                    <button className="btn btn-yellow" type='submit'>Reserve maintenant <i className="fa fa-paper-plane" /></button>
                  </div>
              </form>
            </div>
            {/* <div className="widget_ads">
                <a href="#"><img className="w-100" src={publicUrl + "img/restourent/01.png"} alt="img" /></a>
              </div> */}
          </div>
        </div>
      </div>
    </div>
    </div >
}

export default GameDetails