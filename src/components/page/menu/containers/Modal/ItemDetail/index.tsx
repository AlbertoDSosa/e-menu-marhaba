import React from 'react';
import styles from './styles.module.css';
import { IonModal, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useData } from '../../../../../../contexts/DataContext';

import {
  ProductListItem,
  Product,
  DisplayInfo,
  Image,
  Allergenic
} from '../../../../../../definitions/models';

interface ItemDetailProps {
  showModal: boolean;
  setShowModal(state: boolean): void;
  lang: string;
  item: Product;
  listItem: ProductListItem;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  lang,
  showModal,
  setShowModal,
  item,
  listItem
}) => {
  const { get } = useData();
  const images = get({ collection: 'images', from: 'state' });
  const allergens = get({ collection: 'allergens', from: 'system' });
  const allergensFreeImg =
    images.dictionary['image->allergens->allergen-free-1'];

  const itemImg: Image = images.dictionary[item.mainImg || item.defaultImg];

  return (
    <IonModal
      isOpen={showModal}
      onDidDismiss={() => setShowModal(false)}
      className={styles.modal}
    >
      <img loading="lazy" src={itemImg.full?.src} alt={itemImg.full?.title} />

      <IonGrid style={{ width: '95%' }}>
        <IonRow>
          {item.hasAllergens &&
            item.allergens!.map((allergenicId) => {
              const allergenic: Allergenic = allergens.dictionary[allergenicId];
              const allergenicInfo: DisplayInfo = allergenic.displayInfo[lang];
              const allergenicImg: Image =
                images.dictionary[allergenic.mainImg || allergenic.defaultImg];
              return (
                <IonCol size="2" key={allergenicId}>
                  <img
                    loading="lazy"
                    width="64"
                    height="64"
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      padding: '.2em'
                    }}
                    src={allergenicImg.full.src}
                    alt={allergenicImg.full.title}
                  />
                  <IonText>
                    <p
                      style={{
                        padding: '.2em',
                        margin: '0',
                        textAlign: 'center'
                      }}
                    >
                      {allergenicInfo.title}
                    </p>
                  </IonText>
                </IonCol>
              );
            })}
          {item.allergens?.length === 0 && (
            <img
              loading="lazy"
              width="100"
              height="100"
              src={allergensFreeImg.full.src}
              alt={allergensFreeImg.full.title}
            />
          )}
        </IonRow>
      </IonGrid>
    </IonModal>
  );
};

export default ItemDetail;
