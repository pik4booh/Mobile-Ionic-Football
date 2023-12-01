import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonButton,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import ItemEquipe from '../components/ItemEquipe';
import { filter } from 'ionicons/icons';
import axios from 'axios';

interface Equipe {
  idGeneral: string;
  rang: number;
  note: string;
  buts: string;
  tirePM: string;
  jaune: string;
  rouge: string;
  possession: string;
  passesReussies: string;
  aeriensGagnes: string;
  equipe: {
    idEquipe: string;
    nomEquipe: string;
    competition: {
      idCompetition: string;
      nomCompetition: string;
    };
  };
}

const Tab1: React.FC = () => {
  const [equipeData, setEquipeData] = useState<Equipe[]>([]);
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const endpoint = `http://ec2-13-245-158-233.af-south-1.compute.amazonaws.com:5002/api/WhoScored/generals/${tab}`;

    try {
      const response = await axios.get<Equipe[]>(endpoint);
      setEquipeData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Football Stats</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value={activeTab} onIonChange={(e) => setActiveTab(e.detail.value as string)}>
            <IonSegmentButton value="general">
              <IonTitle>General</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton value="defense" disabled={true}>
              <IonTitle>Defense</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton value="attaque" disabled={true}>
              <IonTitle>Attaque</IonTitle>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      {loading ? (
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol size="auto">
              <img src="src/img/loading.gif" alt="Loading" />
            </IonCol>
          </IonRow>
        </IonGrid>
        ) : (
        equipeData.map((equipe, index) => (
        <ItemEquipe
          key={equipe.idGeneral}
          rang={index+1}
          note={equipe.note}
          buts={equipe.buts}
          tirePM={equipe.tirePM}
          jaune={equipe.jaune}
          rouge={equipe.rouge}
          possession={equipe.possession}
          passesReussies={equipe.passesReussies}
          aeriensGagnes={equipe.aeriensGagnes}
          nomEquipe={equipe.equipe.nomEquipe}
          nomCompetition={equipe.equipe.competition.nomCompetition}
          />
        ))
        )}

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={filter}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonButton onClick={() => fetchData('exterieur')}>Exterieur</IonButton>
            <IonButton onClick={() => fetchData('domicile')}>Domicile</IonButton>
            <IonButton onClick={() => fetchData('general')}>General</IonButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
