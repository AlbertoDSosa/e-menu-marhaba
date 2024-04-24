import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import FlagsContainer from '../../components/page/menu/containers/Flags';
import { IonPage, IonLoading } from '@ionic/react';
import { useQuery } from '../../hooks/useQuery';

const Flags: React.FC<RouteComponentProps> = ({ history }) => {
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
      <FlagsContainer />
    </IonPage>
  );
};

export default withRouter(Flags);
