import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import FlagsContainer from '../../components/page/menu/containers/Flags';
import { IonPage } from '@ionic/react';

const Flags: React.FC<RouteComponentProps> = ({ history }) => {
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
      <FlagsContainer />
    </IonPage>
  );
};

export default withRouter(Flags);
