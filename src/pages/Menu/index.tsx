import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MenuPageContainer from '../../components/page/menu/containers/MenuPage';
import { IonPage } from '@ionic/react';
import Header from '../../components/page/layout/Header';

interface MenuPageProps
  extends RouteComponentProps<{
    pageId: string;
    lang: string;
  }> {}

const MenuPage: React.FC<MenuPageProps> = ({ history, match }) => {
  const { pageId, lang } = match.params;
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
      <MenuPageContainer lang={lang} pageId={pageId} />
    </IonPage>
  );
};

export default withRouter(MenuPage);
