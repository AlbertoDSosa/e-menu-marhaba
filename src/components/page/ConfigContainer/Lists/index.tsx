import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useData } from '../../../../contexts/DataContext';

const ConfigLists: React.FC = () => {
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

  const lists = get({ collection: 'lists', from: 'state' });
  const language = generalInfo.dictionary.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {lists.collection.map((list: any) => {
          const info = list.displayInfo[language];
          return (
            <IonItem key={list.id} routerLink={`/config/lists/${list.id}`}>
              <IonLabel>
                <h3>{info.title}</h3>
                {info.description && <p>{info.description}</p>}
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigLists;
