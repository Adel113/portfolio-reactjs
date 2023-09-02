import './App.css';
import { IonIcon } from '@ionic/react';
import { scrollToCoordonnees } from './Navbar';
import { scrollToCompetences } from './Navbar';
import { scrollToExperiences } from './Navbar';
import { scrollToFormations } from './Navbar';
import { scroolToQuiSuisJe } from './Navbar';


import { person } from 'ionicons/icons';
import { locate } from 'ionicons/icons';
import { construct } from 'ionicons/icons';
import { school } from 'ionicons/icons';
import { briefcase } from 'ionicons/icons';





function Jss() {
  return (
    <div className="nav-mobile">
        <ul>
           <li onClick={scroolToQuiSuisJe}>
               <IonIcon icon={person} />
           </li>
           <li onClick={scrollToCoordonnees} >
               <IonIcon icon={locate} />
           </li>
           <li onClick={scrollToCompetences}>
               <IonIcon icon={construct} />
           </li>
           <li onClick={scrollToFormations}>
               <IonIcon icon={school} />    
           </li>
           <li onClick={scrollToExperiences}>
               <IonIcon icon={briefcase} />
           </li>
        </ul>
    </div>
  );
}

export default Jss;
