import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import games from '../../storage/games.json';

class Game extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/assets/photo/'

		return <div className="offer-area pd-top-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="section-title text-center">
							<h2 className="title">Special offers &amp; Discounts</h2>
							<p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
						</div>
					</div>
				</div>
			</div>
			<div className="destinations-list-slider-bg">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
							<div className="destinations-list-slider">
								{
									games.map(g => (
										<div className="d-list-slider-item" key={g.id}>
											<div className="single-destinations-list text-center">
												<div className="thumb">
													<span className="d-list-tag">Special Game</span>
													<img src={publicUrl + g.mainPhoto} alt="list" />
													<div className="d-list-btn-wrap">
														<div className="d-list-btn viaje-go-top">
															<Link className="btn btn-yellow" to={{pathname:"/game-details",search:'id='+g.id}}>Book Now <i className="fa fa-paper-plane" /></Link>
														</div>
													</div>
												</div>
												<div className="details">
													<h4 className="title">{g.name}</h4>
													<p className="content">{g.title}</p>
													<ul className="tp-list-meta border-bt-dot">
														<li><i className="fa fa-calendar-o" /> 8oct</li>
														<li><i className="fa fa-clock-o" /> 4 days</li>
														<li><i className="fa fa-star" /> {g.review}</li>
													</ul>
													<div className="tp-price-meta tp-price-meta-cl">
														<p>Price</p>
														<h2>{g.price} <small>CFA</small></h2>
														<del>{g.revisedPrice}<span>CFA</span></del>
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
	}
}

export default Game