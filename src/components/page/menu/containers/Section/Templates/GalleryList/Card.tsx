import React, { useState } from 'react';
import { useQuery } from '../../../../../../../hooks/useQuery';
import {
  Image,
  Product,
  ProductListItem
} from '../../../../../../../definitions/models';

import ItemDetailModal from '../../../Modal/ItemDetail';
import {
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonLoading
} from '@ionic/react';

interface GaleryCardProps {
  itemId: string;
  lang: string;
}

const Card: React.FC<GaleryCardProps> = ({ itemId, lang }) => {
  const { isLoading: itemsIsLoading, dictionary: items } = useQuery({
    key: 'items'
  });

  const { isLoading: listItemsIsLoading, dictionary: listItems } = useQuery({
    key: 'listItems'
  });

  const { isLoading: imagesIsLoading, dictionary: images } = useQuery({
    key: 'images'
  });
  const [showModal, setShowModal] = useState(false);

  if (imagesIsLoading || listItemsIsLoading || itemsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const listItem: ProductListItem = listItems[itemId];
  const item: Product = items[listItem.itemId];
  const info = item.displayInfo[lang];
  const image: Image = images[item.mainImg || item.defaultImg];

  return (
    <IonCol size="3" key={itemId}>
      <ItemDetailModal
        lang={lang}
        item={item}
        listItem={listItem}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <IonCard style={{ height: '23em' }} onClick={() => setShowModal(true)}>
        {image && <IonImg src={image.full.src} alt={image.full.title} />}
        <IonCardHeader>
          <IonCardSubtitle color="dark">{info.title}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );
};

export default Card;
