import React from 'react';
import { Image } from 'definitions/models';
import { AddToEntityItem, EditImageEntity } from 'definitions/dataContext';
import { useData } from '../../../../contexts/DataContext';
import { IonGrid, IonRow } from '@ionic/react';
import ImageCard from './ImageCard';

interface ImageListProps {
  entity: EditImageEntity;
  entityName: AddToEntityItem;
}
const ImageList: React.FC<ImageListProps> = ({ entity, entityName }) => {
  const { get } = useData();
  const images = get({ collection: 'images', from: 'state' });
  const imageList = entity.images!;

  return (
    <IonGrid>
      <IonRow>
        {imageList?.map((img: string) => {
          const itemListImg: Image = images.dictionary[img];
          return (
            <ImageCard
              key={img}
              img={itemListImg}
              isMainImg={img === entity.mainImg}
              entityId={entity.id}
              entity={entityName}
            />
          );
        })}
      </IonRow>
    </IonGrid>
  );
};

export default ImageList;
