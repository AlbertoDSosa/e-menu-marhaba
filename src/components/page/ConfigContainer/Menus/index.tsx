import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useQuery } from '../../../../hooks/useQuery';

const ConfigMenus: React.FC = () => {
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { collection: menus, isLoading: menusIsLoading } = useQuery({
    key: 'pageMenus'
  });

  if (generalInfoIsLoading || menusIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const language = generalInfo.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {menus?.map((menu: any) => {
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
