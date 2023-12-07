import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IonContent } from '@ionic/react';
// import styles from './styles.module.css';
import CardList from './CardList';

import { useData } from '../../../../../contexts/DataContext';

interface MenusProps
  extends RouteComponentProps<{
    menuId: string;
    lang: string;
  }> {}

const MenusContainer: React.FC<MenusProps> = ({ match }) => {
  const lang = match.params.lang;
  const menuId = match.params.menuId;

  const { get } = useData();

  const pageMenus = get({ collection: 'pageMenus', from: 'state' });
  const menu = pageMenus.dictionary[menuId];

  return (
    <IonContent fullscreen>
      <CardList menus={menu.items} lang={lang} />
    </IonContent>
  );
};

export default withRouter(MenusContainer);
