import {
  IonList,
  IonMenu,
  IonListHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { IPage, routes } from './routes';

const ConfigMenu: React.FC = () => {
  const location = useLocation();

  function renderlistItems(list: IPage[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonItem
          key={p.title}
          routerLink={p.path}
          color={location.pathname === p.path ? 'dark' : undefined}
        >
          <IonIcon slot="start" icon={p.icon} />
          <IonLabel>{p.title}</IonLabel>
        </IonItem>
      ));
  }

  return (
    <IonMenu contentId="config">
      <IonContent>
        <IonList>
          <IonListHeader>Editar Menús</IonListHeader>
          {renderlistItems(routes.configPages)}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default ConfigMenu;
