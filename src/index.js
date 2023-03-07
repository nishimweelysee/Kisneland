import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import AboutUs from './components/about';
import TourList from './components/tour-list';
import GameDetails from './components/game-details';
import DestinationDetails from './components/destination-details';
import Gallery from './components/gallery';
import GalleryDetails from './components/gallery-details';
import Faq from './components/faq';
import Contact from './components/contact';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import UserProfile from './components/user-profile';
import PiscineAbonementDetail  from './components/piscineAbonement-details';
class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={AboutUs} />
	                    <Route path="/tour-list" component={TourList} />
	                    <Route path="/destination-details" component={DestinationDetails} />
	                    <Route path="/gallery" component={Gallery} />
	                    <Route path="/gallery-details" component={GalleryDetails} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/contact" component={Contact} />
	                    <Route path="/error" component={Error} />
	                    <Route path="/comming-soon" component={CommingSoon} />
	                    <Route path="/user-profile" component={UserProfile} />
						<Route path="/game-details" component={GameDetails} />
						<Route path="/piscine-details" component={PiscineAbonementDetail} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
