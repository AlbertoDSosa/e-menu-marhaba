import React from 'react';
import { Image } from 'definitions/models';
import { AddToEntityItem, EditImageEntity } from 'definitions/dataContext';
import { useQuery } from '../../../../hooks/useQuery';
import { IonGrid, IonRow, IonLoading } from '@ionic/react';
import ImageCard from './ImageCard';

interface ImageListProps {
  entity: EditImageEntity;
  entityName: AddToEntityItem;
}
const ImageList: React.FC<ImageListProps> = ({ entity, entityName }) => {
  const { dictionary: images, isLoading } = useQuery({
    key: 'images'
  });

  if (isLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const imageList = entity.images!;

  return (
    <IonGrid>
      <IonRow>
        {imageList?.map((img: string) => {
          const itemListImg: Image = images[img];
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
