import React, { useState } from 'react';
import { useQuery } from '../../../../../../../hooks/useQuery';

import { IonText, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';

import { ProductList, InfoList } from '../../../../../../../definitions/models';
import NormalItemList from './NormalItemList';

interface NormalListProps {
  list: ProductList | InfoList;
  lang: string;
}
const NormalListLayout: React.FC<NormalListProps> = ({ list, lang }) => {
  const listInfo = list.displayInfo[lang];
  const { isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  const { isLoading: templatesIsLoading } = useQuery({
    key: 'templates'
  });

  if (templatesIsLoading || listItemsIsLoading || itemsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }
  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        {list.showTitle && (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ marginTop: '0.45em', fontWeight: 'bold' }}>
                {listInfo?.title}
              </h2>
              {list.showExtraInfo && <p>{listInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        )}
      </IonRow>
      <NormalItemList list={list} lang={lang} />
    </IonGrid>
  );
};

export default NormalListLayout;
