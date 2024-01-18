import { useState } from 'react';

import {
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonLoading
} from '@ionic/react';

import {
  Image,
  Product,
  ProductListItem
} from '../../../../../../../definitions/models';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import ItemDetailModal from '../../../Modal/ItemDetail';

const GalleryList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: itemsIsLoading, dictionary: items } = useQuery({
    key: 'items'
  });

  const { isLoading: listItemsIsLoading, dictionary: listItems } = useQuery({
    key: 'listItems'
  });

  const { isLoading: imagesIsLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (
    imagesIsLoading ||
    listsIsLoading ||
    listItemsIsLoading ||
    itemsIsLoading
  ) {
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
        const listItem: ProductListItem = listItems[itemId];
        const item: Product = items[listItem.itemId];
        const info = item.displayInfo[lang];
        const image: Image = images[item.mainImg || item.defaultImg];

        const [showModal, setShowModal] = useState(false);

        return (
          <IonCol size="3" key={itemId}>
            <ItemDetailModal
              lang={lang}
              item={item}
              listItem={listItem}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <IonCard
              style={{ height: '23em' }}
              onClick={() => setShowModal(true)}
            >
              {image && (
                <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
              )}
              <IonCardHeader>
                <IonCardSubtitle color="dark">{info.title}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        );
      })}
    </IonRow>
  );
};

export default GalleryList;
