import React from 'react';

import { IonRow, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import Card from './Card';

const GalleryList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (listsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const list = lists[section.lists[0]];

  return (
    <IonRow>
      {list?.items.map((itemId: string) => {
        return <Card key={itemId} lang={lang} itemId={itemId} />;
      })}
    </IonRow>
  );
};

export default GalleryList;
