import { RouteComponentProps, withRouter } from 'react-router-dom';

import MenusContainer from '../../components/page/menu/containers/Menus';
import { IonPage } from '@ionic/react';
import Header from '../../components/page/layout/Header';

const Menus: React.FC<RouteComponentProps> = ({ history }) => {
  let touchScreen: any;

  const activeScreensaver = () => {
    clearTimeout(touchScreen);
    touchScreen = setTimeout(() => {
      history.push('/screensaver');
    }, 90000);
  };

  document.addEventListener('click', () => {
    activeScreensaver();
  });

  document.addEventListener('mousemove', () => {
    activeScreensaver();
  });

  document.addEventListener('touchmove', () => {
    activeScreensaver();
  });

  return (
    <IonPage>
      <Header />
      <MenusContainer />
    </IonPage>
  );
};

export default withRouter(Menus);
