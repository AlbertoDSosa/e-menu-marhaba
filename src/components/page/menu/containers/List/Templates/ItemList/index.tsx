import { useState } from 'react';
// import styles from './styles.module.css';
import { useData } from '../../../../../../../contexts/DataContext';

import {
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';

import { informationCircleOutline, radioButtonOnOutline } from 'ionicons/icons';

import {
  DisplayInfo,
  ProductListItem,
  Product,
  Variants,
  ProductList,
  InfoList,
  ListTemplate
} from '../../../../../../../definitions/models';

import ItemDetailModal from '../../../Modal/ItemDetail';

interface ItemListProps {
  list: ProductList | InfoList;
  lang: string;
}

const ItemList: React.FC<ItemListProps> = ({ list, lang }) => {
  const { get } = useData();
  const items = get({ collection: 'items', from: 'state' });
  const listItems = get({ collection: 'listItems', from: 'state' });
  const variants = get({ collection: 'variants', from: 'system' });
  const templates = get({ collection: 'templates', from: 'system' });

  const listInfo = list.displayInfo[lang];
  const listTemplate = templates.dictionary[list.template];
  const { styles: listStyles } = listTemplate as ListTemplate;

  if (list.hasVariants) {
    const productVariants: Variants = variants.dictionary[list.variants!];
    const itemVariants = Object.values(productVariants.itemVariants);

    return (
      <IonGrid>
        <IonRow>
          {list.showTitle && (
            <IonCol className="ion-justify-self-center" color="dark" size="6">
              <IonText className="ion-text-center">
                <h2
                  style={{ marginTop: '0.45em', fontWeight: 'bold' }}
                  className=""
                >
                  {listInfo?.title}
                </h2>
              </IonText>
            </IonCol>
          )}
          {itemVariants?.map((item) => {
            const info = item.displayInfo[lang];

            return (
              <IonCol className="ion-align-self-center" size="2" key={item.id}>
                <IonLabel color="dark">{info.title}</IonLabel>
              </IonCol>
            );
          })}
        </IonRow>
        {list?.items.map((itemId: string) => {
          const listItem: ProductListItem = listItems.dictionary[itemId];
          const item: Product = items.dictionary[listItem.itemId];
          const itemInfo: DisplayInfo = item.displayInfo[lang];
          const itemVariantPrices = Object.values(item.itemVariantPrices!);

          return (
            listItem.show && (
              <IonRow key={itemId}>
                <IonCol size="6">
                  <IonLabel>
                    <h2>{itemInfo?.title}</h2>
                    <p className="ion-text-wrap">
                      {listItem.showDescription && itemInfo?.description}
                    </p>
                  </IonLabel>
                </IonCol>
                {item.type === 'product' &&
                  listItem.showPrice &&
                  itemVariantPrices?.map((price, index) => {
                    return (
                      <IonCol size="2" key={index}>
                        <IonText color="dark">
                          {price?.amount ? `${price.amount} €` : ''}
                        </IonText>
                      </IonCol>
                    );
                  })}
              </IonRow>
            )
          );
        })}
      </IonGrid>
    );
  } else {
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
        {list?.items.map((itemId: string) => {
          const listItem: ProductListItem = listItems.dictionary[itemId];
          const item: Product = items.dictionary[listItem.itemId];
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
                    <p
                      className={`ion-text-${listStyles.itemTitle.textJustify}`}
                    >
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
      </IonGrid>
    );
  }
};

export default ItemList;
