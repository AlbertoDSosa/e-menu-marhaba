import React, { useState } from 'react';
import { useQuery } from '../../../../../../../hooks/useQuery';

import { IonLabel, IonText, IonRow, IonCol, IonIcon } from '@ionic/react';

import { informationCircleOutline, radioButtonOnOutline } from 'ionicons/icons';

import {
  DisplayInfo,
  ProductListItem,
  Product,
  ProductList,
  InfoList,
  ListTemplate
} from '../../../../../../../definitions/models';

import ItemDetailModal from '../../../Modal/ItemDetail';

interface NormalItemListProps {
  list: ProductList | InfoList;
  lang: string;
}

const NormalItemList: React.FC<NormalItemListProps> = ({ list, lang }) => {
  const { dictionary: items } = useQuery({
    key: 'items'
  });

  const { dictionary: listItems } = useQuery({
    key: 'listItems'
  });

  const { dictionary: templates } = useQuery({
    key: 'templates'
  });

  const listTemplate = templates[list.template];
  const { styles: listStyles } = listTemplate as ListTemplate;

  return (
    <>
      {list?.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems[itemId];
        const item: Product = items[listItem.itemId];
        const itemInfo: DisplayInfo = item.displayInfo[lang];

        const [showModal, setShowModal] = useState(false);

        return (
          listItem.show && (
            <IonRow key={itemId}>
              {listItem.showItemDetail ? (
                <>
                  <ItemDetailModal
                    lang={lang}
                    item={item}
                    listItem={listItem}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />

                  <IonCol
                    className="ion-align-self-center"
                    size={listStyles.itemIcon.colSize}
                  >
                    <IonIcon
                      onClick={() => setShowModal(true)}
                      size="large"
                      icon={informationCircleOutline}
                    />
                  </IonCol>
                </>
              ) : (
                <IonCol
                  className="ion-align-self-center"
                  size={listStyles.itemIcon.colSize}
                >
                  <IonIcon
                    style={{ margin: '0 auto', display: 'block' }}
                    onClick={() => setShowModal(true)}
                    icon={radioButtonOnOutline}
                  />
                </IonCol>
              )}
              <IonCol
                className="ion-align-self-center"
                size={listStyles.itemTitle.colSize}
              >
                <IonLabel>
                  <h2
                    className={`ion-text-${listStyles.itemTitle.textJustify}`}
                  >
                    {itemInfo?.title}
                  </h2>
                  <p className={`ion-text-${listStyles.itemTitle.textJustify}`}>
                    {listItem?.showDescription && itemInfo?.description}
                  </p>
                </IonLabel>
              </IonCol>
              <IonCol
                className="ion-align-self-center"
                size={listStyles.productLine?.colSize}
              >
                {listItem.showPrice && (
                  <div style={{ borderTop: '1px solid' }}></div>
                )}
              </IonCol>
              <IonCol
                className="ion-align-self-center"
                size={listStyles.productPrice?.colSize}
              >
                {item.type === 'product' && listItem.showPrice && (
                  <IonText color="dark">
                    <p className="ion-text-center">
                      {item.price?.amount ? `${item.price.amount} €` : ''}
                    </p>
                  </IonText>
                )}
              </IonCol>
            </IonRow>
          )
        );
      })}
    </>
  );
};

export default NormalItemList;
