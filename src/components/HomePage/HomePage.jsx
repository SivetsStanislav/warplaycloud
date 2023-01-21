import React from 'react';
import Header from '../Header/Header';
import CloudGaming from '../CloudGaming/CloudGaming';
import QuickStart from '../QuickStart/QuickStart';
import Subscriptiones from '../Subscriptiones/Subscriptiones';
import Browser from '../Browser/Browser';
import GameServers from '../GameServers/GameServers';
import Footer from '../Footer/Footer';

import './HomePage.scss'

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <CloudGaming />
            <QuickStart />
            <Subscriptiones />
            <Browser />
            <GameServers />
            <Footer />
        </div>
    );
}

export default HomePage;