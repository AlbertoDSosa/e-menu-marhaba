import React from 'react';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import { useData } from '../../../contexts/DataContext';

const ConfigGeneralInfo: React.FC = () => {
  const { get, loading } = useData();

  if (loading) return 'Loading...';

  const generalInfo = get({ collection: 'generalInfo', from: 'state' });

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>{`Nombre: ${generalInfo.dictionary.companyName}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>{`Web: ${generalInfo.dictionary.url}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Lenguaje base: Español</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default ConfigGeneralInfo;
