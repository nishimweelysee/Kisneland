import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PisineDetails from './section-components/piscineAbonementDetails';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';
import piscineAbonements from '../storage/piscineAbonement.json';

const PiscineAbonementDetailsPage = () => {
    const location = useLocation();
    const [abonement,setAbonement] = useState({});
    useEffect(()=>{
        const query = new URLSearchParams(location.search);
        const g = piscineAbonements.find(p=>p.id==query.get("id"));
        setAbonement({...abonement,...g});
    },[])
    return <div>
        <Navbar />
        {abonement && <PageHeader headertitle={`Abonnement ${abonement.name} Details`}  />}
        {abonement && <PisineDetails abonement={abonement} />}
        <Subscribe />
        <Footer />
    </div>
}

export default PiscineAbonementDetailsPage

