import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import GameDetails from './section-components/game-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';
import games from '../storage/games.json';

const GameDetailsPage = () => {
    const location = useLocation();
    const [game,setGame] = useState({content:"",description:"",id:"",included:{},mainPhoto:"",name:"",photos: [],price:0,review:0,revisedPrice:0,title:""});
    useEffect(()=>{
        const query = new URLSearchParams(location.search);
        const g = games.find(p=>p.id==query.get("id"));
        setGame({...game,...g});
    },[])
    return <div>
        <Navbar />
        <PageHeader headertitle={`Game ${game.name} Details`}  />
        <GameDetails game={game} />
        <Subscribe />
        <Footer />
    </div>
}

export default GameDetailsPage

