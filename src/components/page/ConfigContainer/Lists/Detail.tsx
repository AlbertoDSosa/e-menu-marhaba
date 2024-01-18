import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle,
  IonLoading
} from '@ionic/react';

import { useQuery } from '../../../../hooks/useQuery';

import EditDisplayInfo from '../EditDisplayInfo';
import EditItems from '../EditItems';

interface ListDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ListDetail: React.FC<ListDetailPageProps> = ({ match }) => {
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: lists, isLoading: listsIsLoading } = useQuery({
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

  const key = match.params.key;
  const lang = generalInfo.baseLanguage;
  const list = lists[key];
  const listInfo = list.displayInfo[lang];

  return (
    <IonContent>
      <EditDisplayInfo entityName="list" entity={list} />

      <EditItems entityId={key} entity="list" />
      <IonList>
        <IonListHeader color="dark">
          <h3>Opciones de Lista</h3>
        </IonListHeader>

        {/* <IonItem>
          <IonLabel>Mostrar Lista</IonLabel>
          <IonToggle
            color="dark"
            checked={list.show}
            onIonChange={() => {
              set({});
            }}
          />
        </IonItem> */}

        <IonItem>
          <IonLabel>Mostrar Título</IonLabel>
          <IonToggle
            color="dark"
            checked={list.showTitle}
            onIonChange={() => {
              // set({
              //   action: 'show',
              //   info: 'title',
              //   entity: 'list',
              //   id: list.id
              // });
            }}
          />
        </IonItem>

        {listInfo.description && (
          <IonItem>
            <IonLabel>Mostrar Descripción</IonLabel>
            <IonToggle
              color="dark"
              checked={list.showDescription}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'description',
                //   entity: 'list',
                //   id: list.id
                // });
              }}
            />
          </IonItem>
        )}
        {listInfo.extraInfo && (
          <IonItem>
            <IonLabel>Mostrar Información Extra</IonLabel>
            <IonToggle
              color="dark"
              checked={list.showExtraInfo}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'extra-info',
                //   entity: 'list',
                //   id: list.id
                // });
              }}
            />
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default withRouter(ListDetail);
