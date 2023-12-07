import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useData } from '../../../../contexts/DataContext';

const ConfigMenus: React.FC = () => {
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
  const menus = get({ collection: 'pageMenus', from: 'state' });
  const language = generalInfo.dictionary.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {menus.collection.map((menu: any) => {
          const info = menu.displayInfo[language];

          return (
            menu.active && (
              <IonItem key={menu?.id} routerLink={`/config/menus/${menu.id}`}>
                <IonLabel>
                  <h3>{info.title}</h3>
                  {info.description && <p>{info.description}</p>}
                </IonLabel>
              </IonItem>
            )
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigMenus;
