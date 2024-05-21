import React from 'react';
import { useQuery } from 'hooks/useQuery';
import { PageMenuItem } from 'definitions/models';
import MenuCard from '../MenuCard';

import { IonGrid, IonRow, IonLoading } from '@ionic/react';

interface CardListProps {
  menus: Array<string>;
  lang: string;
}

const CardList: React.FC<CardListProps> = ({ menus, lang }) => {
  const { dictionary: pageMenuItems, isLoading: isMenuItemsLoading } = useQuery(
    { key: 'pageMenuItems' }
  );
  if (isMenuItemsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  return (
    <IonGrid style={{ width: '70vw' }}>
      <IonRow
        className="ion-justify-content-center ion-align-items-center"
        style={{ height: '80vh' }}
      >
        {menus?.map((menuId) => {
          const menuItem: PageMenuItem = pageMenuItems[menuId];

          if (!menuItem.show) {
            return null;
          }

          return <MenuCard key={menuId} lang={lang} menuItem={menuItem} />;
        })}
      </IonRow>
    </IonGrid>
  );
};

export default CardList;
