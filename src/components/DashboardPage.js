import React from 'react';
import Presentor from '../components/Presentor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoneSoFarItem from '../components/DoneSoFarItem';
import SolaredgeItem from '../DoneSoFarItems/Solaredge';
import EssenceItem from '../DoneSoFarItems/Essence';

const DashboardPage = () => (
  <div>
    <Header />
    <Presentor />
    <DoneSoFarItem item={SolaredgeItem}/>
    <DoneSoFarItem item={EssenceItem}/>
    <Footer />
  </div>
);

export default DashboardPage;
