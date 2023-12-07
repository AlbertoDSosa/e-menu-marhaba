import { RouteComponentProps, withRouter } from 'react-router-dom';

import MenusContainer from '../../components/page/menu/containers/Menus';
import { IonPage, IonLoading } from '@ionic/react';
import Header from '../../components/page/layout/Header';
import { useData } from '../../contexts/DataContext';

const Menus: React.FC<RouteComponentProps> = ({ history }) => {
  let touchScreen: any;
  const { loading } = useData();

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

  if (loading)
    return (
      <IonPage>
        <IonLoading
          className="custom-loading"
          trigger="open-loading"
          message="Loading"
        />
      </IonPage>
    );

  return (
    <IonPage>
      <Header />
      <MenusContainer />
    </IonPage>
  );
};

export default withRouter(Menus);
