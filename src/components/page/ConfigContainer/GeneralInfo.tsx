import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useQuery } from 'hooks/useQuery';

const ConfigGeneralInfo: React.FC = () => {
  const { dictionary: generalInfo, isLoading } = useQuery({
    key: 'generalInfo'
  });

  if (isLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>{`Nombre: ${generalInfo.companyName}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>{`Web: ${generalInfo.url}`}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Lenguaje base: Español</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default ConfigGeneralInfo;
