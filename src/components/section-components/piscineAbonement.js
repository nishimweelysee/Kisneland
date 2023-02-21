import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import piscineAbonements from '../../storage/piscineAbonement.json';
class PiscineAbonement extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/assets/'

		return <div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/8.png)' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-9">
						<div className="section-title text-center">
							<h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Plan de la piscine</h2>
							<p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan ignota.</p>
						</div>
					</div>
				</div>
				<div className="destinations-list-slider-bg">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
								<div className="destinations-list-slider">
									{
										piscineAbonements.map(p => (
											<div className="d-list-slider-item" key={p.id}>
												<div className="single-destinations-list">
													<div className="thumb text-center">
														<span className="d-list-tag">Special Abonnement</span>
														<img src={publicUrl + p.mainPhoto} alt="list" />
														<div className="d-list-btn-wrap">
															<div className="d-list-btn viaje-go-top">
																<Link className="btn btn-yellow" to={{ pathname: "/piscine-details", search: 'id=' + p.id }}>Buy Now <i className="fa fa-paper-plane" /></Link>
															</div>
														</div>
													</div>
													<div className="details">
														<p className="location"><img src={publicUrl + "img/icons/1.png"} alt="map" />N'Djamena</p>
														<h4 className="title">{p.name}</h4>
														<p className="content">{p.duration + ' ' + p.persons}</p>
														<div className="tp-price-meta">
															<h2>{p.price} <small>CFA</small></h2>
														</div>
													</div>
												</div>
											</div>
										))
									}
								</div>
							</div>
							<div className="col-lg-2 align-self-center order-lg-11">
								<div className="container">
									<div className="destinations-slider-controls">
										<div className="slider-nav tp-control-nav" />
										{/*slider-nav*/}
										<div className="tp-slider-extra slider-extra">
											<div className="text">
												<span className="first">01 </span>
												<span className="last" />
											</div>
											{/*text*/}
											<div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
												<span className="slider__label sr-only" />
											</div>
										</div>
										{/*slider-extra*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default PiscineAbonement