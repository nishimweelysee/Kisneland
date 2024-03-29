import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { transporter } from '../../helper/mailHelper';
import piscineAbonements from '../../storage/piscineAbonement.json';

class AbonnementDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      startDate: null,
      endDate: null,
      message: ""
    }
  }
  componentDidMount() {
    console.log(this.props.abonement.included)
  }

  async sendEmail(email) {
    const mailOpt = {
      from: 'intercorep@gmail.com',
      to: 'intercorep@gmail.com',
      subject: 'Manège Booking',
      html: email.message,
    };
    await transporter.sendMail(mailOpt);
  }
  render() {

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
                    <img src={publicUrl + this.props.abonement.mainPhoto} alt="image" />
                    <div className="video-popup-btn">
                      <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {
                this.props.abonement.photos && this.props.abonement.photos.map((abon, ind) => (
                  <div key={ind} className={`tp-gallery-item  ${abon.class}`}>
                    <div className="tp-gallery-item-img">
                      <a href="#" data-effect="mfp-zoom-in">
                        <img src={publicUrl + abon.img} alt="image" />
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
                  <p className="content">7 Jours ... Personnes</p>
                  <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <span>{this.props.abonement.review}</span>
                  </div>
                  <div className="all-tags">
                    <a href="#">Adventures</a>
                    <a href="#">Bonheur</a>
                    <a href="#">Nature</a>
                    <a href="#">Manège</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="book-list-warp">
                  <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                  <div className="tp-price-meta">
                    <p>Prix</p>
                    <h2>{this.props.abonement.price}... <small>   CFA</small></h2>
                  </div>
                </div>
                <ul className="tp-list-meta border-tp-solid">
                  <li className="ml-0"><i className="fa fa-calendar-o" />Jan-Dec</li>
                  <li><i className="fa fa-clock-o" /> 7 Jours</li>
                  <li><i className="fa fa-users" />... Personnes</li>
                  <li><i className="fa fa-snowflake-o" /> Relaxe</li>
                  <li><i className="fa fa-star" /> {this.props.abonement.review}</li>
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
              <h4 className="single-page-small-title">Plus d'Info</h4>
              <p>{this.props.abonement.content}</p>
              <div className="package-included-location">
                <div className="row">
                  {
                    piscineAbonements.map(g => (
                      <div key={g.id} className="col-lg-4 col-md-4">
                        <div className="single-blog">
                          <div className="thumb">
                            <img src={publicUrl + g.mainPhoto} alt="blog" />
                          </div>
                          <div className="single-blog-details">
                            <h4 className="title">{g.name}</h4>
                            <p className="content">{g.title}</p>
                            <Link className="btn-read-more" to={{ pathname: "/piscine-details", search: 'id=' + g.id }}><span>Voir Plus<i className="la la-arrow-right" /></span></Link>
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
                <div className="widget-tour-list-meta">
                  <div className="single-widget-search-input-title"><i className="fa fa-user" /> Name</div>
                  <div className="single-widget-search-input">
                    <input type="text" onInput={e => this.setState({ name: e.target.value })} value={this.state.name} placeholder="Name" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                  <div className="single-widget-search-input">
                    <input type="text" onInput={e => this.setState({ email: e.target.value })} value={this.state.email} placeholder="Email" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Phone</div>
                  <div className="single-widget-search-input">
                    <input type="text" onInput={e => this.setState({ phone: e.target.value })} value={this.state.phone} placeholder="Phone" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                  <div className="single-widget-search-input">
                    <input type="text" onChange={e => this.setState({ startDate: e.target.value })} value={this.state.startDate} className="departing-date custom-select" placeholder="Departing" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                  <div className="single-widget-search-input">
                    <input type="text" onChange={e => this.setState({ endDate: e.target.value })} value={this.state.endDate} className="returning-date custom-select" placeholder="Returning" />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Message</div>
                  <div className="single-widget-search-input">
                    <textarea placeholder="Type" onInput={e => this.setState({ message: e.target.value })} value={this.state.message} defaultValue={""} />
                  </div>
                  <div className="text-lg-center text-left">
                    <a className="btn btn-yellow" href="#" onClick={e => this.sendEmail(this.state)}>Reserve maintenant <i className="fa fa-paper-plane" /></a>
                  </div>
                </div>
              </div>
              <div className="widget_ads">
                <a href="#"><img className="w-100" src={publicUrl + "img/restourent/01.png"} alt="img" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default AbonnementDetails