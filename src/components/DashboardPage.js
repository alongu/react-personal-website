import React from 'react';
import Presentor from '../components/Presentor';
import DoneSoFarItem from '../components/DoneSoFarItem';
import SolaredgeItem from '../DoneSoFarItems/Solaredge';
import EssenceItem from '../DoneSoFarItems/Essence';
import BenGurionItem from '../DoneSoFarItems/BenGurion';
import BurningSolarItem from '../DoneSoFarItems/BurningSolar';
import ProjectPreview from './ProjectPreview';
import RemoteControlledCar from '../projects/RemoteControlledCar';

const DashboardPage = () => (
  <div>
    <Presentor />
    <h1 className="fancy"><span > Here's what I've done so far </span></h1>
    <DoneSoFarItem item={SolaredgeItem}/>
    <DoneSoFarItem item={EssenceItem}/>
    <DoneSoFarItem item={BurningSolarItem}/>
    <DoneSoFarItem item={BenGurionItem}/>
    <h1 className="fancy"><span > Programming at Home </span></h1>
    <ProjectPreview item={RemoteControlledCar}/>
    <h1 className="fancy"><span > Hiking is in my soul </span></h1>
    <ProjectPreview item={RemoteControlledCar}/>
    <h2 className="fancy">Let's get in touch.</h2>
    <h3 className="fancy">LinkedIn or Facebook messages work best.</h3>
  </div>
);

export default DashboardPage;
