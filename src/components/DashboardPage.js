import React from 'react';
import Presentor from '../components/Presentor';
import DoneSoFarItem from '../components/DoneSoFarItem';
import SolaredgeItem from '../DoneSoFarItems/Solaredge';
import EssenceItem from '../DoneSoFarItems/Essence';
import BenGurionItem from '../DoneSoFarItems/BenGurion';

const DashboardPage = () => (
  <div>
    <Presentor />
    <h2 className="fancy"><span > Here's what I've done so far </span></h2>
    <DoneSoFarItem item={SolaredgeItem}/>
    <DoneSoFarItem item={EssenceItem}/>
    <DoneSoFarItem item={BenGurionItem}/>
  </div>
);

export default DashboardPage;
