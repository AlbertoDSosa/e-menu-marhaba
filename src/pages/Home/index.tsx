import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonToolbar,
  IonHeader,
  IonTitle
} from '@ionic/react';

import styles from './styles.module.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Touch Menu Hybrid</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid style={{ width: '70vw' }}>
          <IonRow
            style={{ height: '90vh' }}
            className="ion-justify-content-center ion-align-items-center"
          >
            <IonCol size-xs="9" size-sm="6" size-md="4">
              <IonCard href="/config" className={styles.card}>
                <figure className="ion-text-center ion-no-margin">
                  <img src="assets/img/system/config.png" alt="Configuración" />
                </figure>
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center">
                    Configuración
                  </IonCardTitle>
                  <IonCardSubtitle className="ion-text-center">
                    Editar la información del menú
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size-xs="9" size-sm="6" size-md="4">
              <IonCard href="/screensaver" className={styles.card}>
                <figure className="ion-text-center ion-no-margin">
                  <img src="assets/img/system/menu.png" alt="menu" />
                </figure>
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center">Menú</IonCardTitle>
                  <IonCardSubtitle className="ion-text-center">
                    Iniciar la aplicación e ir a lenguajes
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
