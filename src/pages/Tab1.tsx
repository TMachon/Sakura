import { IonContent, IonInput, IonBadge, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { menuItems } from '../menuItems';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        <IonList>
        {menuItems.map(elem => {return(
          <IonItem>

            <IonBadge color="primary">#{elem["id"]}</IonBadge>

            <IonLabel text-wrap>{elem["item"]}</IonLabel>

            <IonInput style={{ textAlign: 'right' }} type="tel" pattern="[0-9]*" color="primary" ></IonInput>

          </IonItem>
        )})}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
