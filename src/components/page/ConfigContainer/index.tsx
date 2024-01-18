import React, { PropsWithChildren } from 'react';

import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSplitPane,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonLoading
} from '@ionic/react';

import { home, arrowBackOutline } from 'ionicons/icons';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import ConfigMenu from './ConfigMenu';

import { useQuery } from '../../../hooks/useQuery';

type Collection =
  | 'lists'
  | 'items'
  | 'categories'
  | 'listItems'
  | 'pageMenus'
  | 'pageMenuItems'
  | 'images'
  | 'slides'
  | 'generalInfo'
  | 'screensaver'
  | 'languages'
  | 'variants'
  | 'allergens'
  | 'templates'
  | 'modals'
  | 'pages'
  | 'pageSections';

interface ContainerProps
  extends PropsWithChildren,
    RouteComponentProps<{
      key: string;
      lang: string;
    }> {
  title: string;
  collection?: Collection;
}

const ConfigContainer: React.FC<ContainerProps> = ({
  children,
  history,
  match,
  collection,
  title
}) => {
  const key = match.params.key;
  let collectionTitle = '';

  if (collection) {
    const { isLoading, dictionary } = useQuery({ key: collection });

    if (isLoading)
      return (
        <IonLoading
          className="custom-loading"
          message="Loading"
          spinner="circles"
        />
      );

    collectionTitle = dictionary[key]?.displayInfo['es'].title;
  }

  return (
    <IonSplitPane contentId="config">
      <ConfigMenu />
      <IonPage id="config">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonMenuButton color="dark" />
              <IonButton color="dark" routerLink="/home">
                <IonIcon size="large" icon={home} />
              </IonButton>
              <IonButton color="dark" onClick={() => history.goBack()}>
                <IonIcon size="large" icon={arrowBackOutline} />
              </IonButton>
              <IonTitle>
                {title} {collectionTitle && `- ${collectionTitle}`}
              </IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonPage>
    </IonSplitPane>
  );
};

export default withRouter(ConfigContainer);
