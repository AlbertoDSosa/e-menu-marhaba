import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonLoading
} from '@ionic/react';

import { useData } from '../../../../contexts/DataContext';

const ConfigItems: React.FC = () => {
  const { get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const generalInfo = get({ collection: 'generalInfo', from: 'state' });

  const items = get({ collection: 'items', from: 'state' });
  const language = generalInfo.dictionary.baseLanguage;

  return (
    <IonContent>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>Productos</h2>
          </IonLabel>
        </IonListHeader>
        {items.collection.map((item: any) => {
          return (
            item?.type === 'product' && (
              <IonItem key={item?.id} routerLink={`/config/items/${item?.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language].title}</h2>
                  <p>{item.displayInfo[language].description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>De Información</h2>
          </IonLabel>
        </IonListHeader>
        {items.collection.map((item: any) => {
          return (
            item.type === 'info' && (
              <IonItem key={item.id} routerLink={`/config/items/${item.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language].title}</h2>
                  <p>{item.displayInfo[language]?.description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>Menus</h2>
          </IonLabel>
        </IonListHeader>
        {items.collection.map((item: any) => {
          return (
            item.type === 'menu' && (
              <IonItem key={item.id} routerLink={`/config/items/${item.id}`}>
                <IonLabel>
                  <h2>{item.displayInfo[language].title}</h2>
                  <p>{item.displayInfo[language]?.description}</p>
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigItems;
