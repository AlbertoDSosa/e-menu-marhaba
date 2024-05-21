import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLoading
} from '@ionic/react';

import { useQuery } from '../../../../hooks/useQuery';
// import { useMutation } from '../../../../hooks/useMutation';

import EditDisplayInfo from '../EditDisplayInfo';
import EditItems from './EditItems';
import ToggleSlide from '../../../../components/ui/ToggleSlide';

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
      <EditDisplayInfo entityName="list" entity={list} resource="lists" />
      <IonList>
        <IonListHeader color="dark">
          <h3>Opciones de Lista</h3>
        </IonListHeader>

        {/* <IonItem>
          <ToggleSlide
            show={list.show}
            title="Mostrar Lista"
            variables={{
              resource: 'lists',
              action: 'set',
              args: {
                action: 'show',
                info: 'item',
                entity: 'list',
                id: list.id
              }
            }}
          />
        </IonItem> */}

        <IonItem>
          <ToggleSlide
            show={list.showTitle}
            title="Mostrar Título"
            variables={{
              resource: 'lists',
              action: 'set',
              args: {
                action: 'show',
                info: 'title',
                entity: 'list',
                id: list.id
              }
            }}
          />
        </IonItem>

        {listInfo.description && (
          <IonItem>
            <ToggleSlide
              show={list.showDescription}
              title="Mostrar Descripción"
              variables={{
                resource: 'lists',
                action: 'set',
                args: {
                  action: 'show',
                  info: 'description',
                  entity: 'list',
                  id: list.id
                }
              }}
            />
          </IonItem>
        )}
        {listInfo.extraInfo && (
          <IonItem>
            <ToggleSlide
              show={list.showExtraInfo}
              title="Mostrar Información Extra"
              variables={{
                resource: 'lists',
                action: 'set',
                args: {
                  action: 'show',
                  info: 'extra-info',
                  entity: 'list',
                  id: list.id
                }
              }}
            />
          </IonItem>
        )}
      </IonList>
      <EditItems entityId={key} entity="list" index="lists" />
    </IonContent>
  );
};

export default withRouter(ListDetail);
