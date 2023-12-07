import React from 'react';
import { useData } from '../../../../../../contexts/DataContext';
import { PageMenuItem } from '../../../../../../definitions/models';
import MenuCard from '../MenuCard';

import { IonGrid, IonRow } from '@ionic/react';

interface CardListProps {
  menus: Array<string>;
  lang: string;
}

const CardList: React.FC<CardListProps> = ({ menus, lang }) => {
  const { get } = useData();
  const pageMenuItems = get({ collection: 'pageMenuItems', from: 'state' });

  return (
    <IonGrid style={{ width: '70vw' }}>
      <IonRow
        className="ion-justify-content-center ion-align-items-center"
        style={{ height: '80vh' }}
      >
        {menus?.map((menuId) => {
          const menuItem: PageMenuItem = pageMenuItems.dictionary[menuId];

          if (!menuItem.show) {
            return false;
          }

          return <MenuCard key={menuId} lang={lang} menuItem={menuItem} />;
        })}
      </IonRow>
    </IonGrid>
  );
};

export default CardList;
