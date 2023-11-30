import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList, IonItem, IonAvatar, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonNote, IonFooter, IonFab, IonFabButton, IonFabList, IonButton, IonBadge, IonAccordion, IonAccordionGroup, IonCol, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ItemEquipe from '../components/ItemEquipe';
import {
  filter,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Football Stats</IonTitle>
        </IonToolbar>
        <IonToolbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            <IonLabel>General</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="dom">
            <IonLabel>Defense</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ext">
            <IonLabel>Attaque</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </IonToolbar>
        
      </IonHeader>
        
      <IonContent fullscreen>
        
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={filter}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonButton>Exterieur</IonButton>
            <IonButton disabled={true}>Domicile</IonButton>
            <IonButton disabled={true}>General</IonButton>
          </IonFabList>
        </IonFab>
        
      <ItemEquipe rang='1' nom='Bayern Munich' competition='Bundesliga' note='7.21' buts='43' tire='19.9' jaune='17' rouge='1' possession='62.9' passereussie='88.8' aeriengagne='12.8'></ItemEquipe>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
