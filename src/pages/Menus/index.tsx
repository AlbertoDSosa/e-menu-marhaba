import { RouteComponentProps, withRouter } from 'react-router-dom';

import MenusContainer from '../../components/page/menu/containers/Menus';
import { IonPage, IonLoading } from '@ionic/react';
import Header from '../../components/page/layout/Header';
import { useQuery } from '../../hooks/useQuery';

const Menus: React.FC<RouteComponentProps> = ({ history }) => {
  let touchScreen: any;

  const { dictionary: screensaver, isLoading } = useQuery({
    key: 'screensaver'
  });

  if (isLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const { timeToShow, selectableTimesToShow } = screensaver;

  const activeScreensaver = () => {
    clearTimeout(touchScreen);
    touchScreen = setTimeout(() => {
      history.push('/screensaver');
    }, selectableTimesToShow[timeToShow]['time']);
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
