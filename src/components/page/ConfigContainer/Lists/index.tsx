import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useQuery } from 'hooks/useQuery';

const ConfigLists: React.FC = () => {
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { collection: lists, isLoading: listsIsLoading } = useQuery({
    key: 'lists'
  });

  if (generalInfoIsLoading || listsIsLoading)
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
        {lists?.map((list: any) => {
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
