import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class History extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="destination-grid-area pd-top-105 viaje-go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h2 className="title">Vision</h2>
			          <p>Vision Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h2 className="title">Mision</h2>
			          <p>Mision Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			        </div>
			      </div>
			    </div>=
			  </div>
			</div>
        }
}

export default History