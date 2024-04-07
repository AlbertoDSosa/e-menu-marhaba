import React from 'react';
import { chunk } from 'lodash';

import { useQuery } from '../../../../../../../hooks/useQuery';

import { IonGrid, IonCol, IonLoading } from '@ionic/react';

import { List } from '../../../../../../../definitions/models';
import ChunkList from './List';

interface ChunkItemListProps {
  list: List;
  lang: string;
  chunkNumber: number;
}

const ChunkItemList: React.FC<ChunkItemListProps> = ({
  list,
  lang,
  chunkNumber
}) => {
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

  const chunkLists = chunk(list.items, chunkNumber);

  return (
    <>
      {chunkLists.map((chunkList: string[], index: number) => {
        return (
          <IonCol key={index}>
            <IonGrid>
              <ChunkList lang={lang} chunkList={chunkList} list={list} />
            </IonGrid>
          </IonCol>
        );
      })}
    </>
  );
};

export default ChunkItemList;
