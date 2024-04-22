import React from 'react';
import { Image } from 'definitions/models';
import { AddToEntityItem, EditImageEntity, Key } from 'definitions/dataContext';
import { useQuery } from '../../../../hooks/useQuery';
import { IonGrid, IonRow, IonLoading, IonImg } from '@ionic/react';
import ImageCard from './ImageCard';

interface ImageListProps {
  entity: EditImageEntity;
  entityName: AddToEntityItem;
  resource: Key;
}
const ImageList: React.FC<ImageListProps> = ({
  entity,
  entityName,
  resource
}) => {
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
  const defaultImg = images[entity.defaultImg];
  return (
    <>
      {entity.mainImg ? (
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
                  resource={resource}
                />
              );
            })}
          </IonRow>
        </IonGrid>
      ) : (
        <IonImg
          style={{ width: 250, height: 150, margin: '1rem' }}
          src={defaultImg.full.src}
          alt={defaultImg.full.title}
        />
      )}
    </>
  );
};

export default ImageList;
