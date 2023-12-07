import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IonContent } from '@ionic/react';

// import EditDisplayInfo from '../EditDisplayInfo';

import EditItems from '../EditItems';
interface ListDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const MenuDetail: React.FC<ListDetailPageProps> = ({ match }) => {
  const key = match.params.key;

  return (
    <IonContent>
      {/* <EditDisplayInfo
        entityName="pageMenu"
        entity={menu}
      /> */}
      <EditItems entityId={key} entity="pageMenu" />
    </IonContent>
  );
};

export default withRouter(MenuDetail);
