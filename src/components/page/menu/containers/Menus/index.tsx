import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IonContent, IonLoading } from '@ionic/react';
// import styles from './styles.module.css';
import CardList from './CardList';

import { useQuery } from 'hooks/useQuery';

interface MenusProps
  extends RouteComponentProps<{
    menuId: string;
    lang: string;
  }> {}

const MenusContainer: React.FC<MenusProps> = ({ match }) => {
  const lang = match.params.lang;
  const menuId = match.params.menuId;

  const { dictionary: menus, isLoading: isMenusLoading } = useQuery({
    key: 'pageMenus'
  });

  if (isMenusLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const menu = menus[menuId];

  return (
    <IonContent fullscreen>
      <CardList menus={menu.items} lang={lang} />
    </IonContent>
  );
};

export default withRouter(MenusContainer);
