import { IonAccordionGroup, IonAccordion, IonItem, IonAvatar, IonLabel, IonNote, IonList, IonBadge, IonGrid, IonRow, IonCol } from "@ionic/react";

interface ItemEquipeProps {
  rang: string;
  nom: string;
  competition: string;
  note: string;
  buts: string;
  tire: string;
  rouge: string;
  jaune: string;
  possession: string;
  passereussie: string;
  aeriengagne: string;
}

const ItemEquipe: React.FC<ItemEquipeProps> = ({ rang,nom,competition,note,buts,tire,rouge,jaune,possession,passereussie,aeriengagne }) => {
  return (
    <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonAvatar aria-hidden="true" slot="start">
                <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
              <IonLabel>
                <h4>{rang}. {nom}</h4>
                <IonNote>{competition}</IonNote>
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <IonList>
                <IonItem>
                  <IonLabel slot='start'>Note</IonLabel>
                  <IonBadge color="danger" slot='end'>{note}</IonBadge>
                </IonItem>

                <IonGrid>
                  <IonRow>
                    <IonCol>Buts : {buts}</IonCol>
                    <IonCol>Tire pm : {tire}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Discipline : <IonBadge color="warning">{jaune}</IonBadge>  <IonBadge color="danger">{rouge}</IonBadge></IonCol>
                    <IonCol></IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Possesion : {possession}%</IonCol>
                    <IonCol>Passereussies : {passereussie}%</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Aeriens gagnes : {aeriengagne}</IonCol>
                  </IonRow>
                </IonGrid>
                
              </IonList>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
  );
};

export default ItemEquipe;
