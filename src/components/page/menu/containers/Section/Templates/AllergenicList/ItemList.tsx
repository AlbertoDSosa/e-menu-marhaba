import React from 'react';
import styles from './styles.module.css';
import { useQuery } from '../../../../../../../hooks/useQuery';

import { IonText, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';
import {
  Allergenic,
  List,
  DisplayInfo,
  Product,
  ProductListItem,
  Image
} from '../../../../../../../definitions/models';

interface ItemListProps {
  list: List;
  lang: string;
}

const AllegenicList: React.FC<ItemListProps> = ({ list, lang }) => {
  const { dictionary: listItems, isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { dictionary: allergens, isLoading: allergensIsLoading } = useQuery({
    key: 'allergens'
  });

  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (
    itemsIsLoading ||
    allergensIsLoading ||
    imagesIsLoading ||
    listItemsIsLoading
  )
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  return (
    <IonGrid>
      {list?.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems[itemId];
        const item: Product = items[listItem.itemId];
        const itemInfo: DisplayInfo = item.displayInfo[lang];

        return (
          item.type === 'product' &&
          item.hasAllergens && (
            <IonRow
              className={`ion-align-items-center ${styles.tableRows}`}
              key={itemId}
            >
              <IonCol
                style={{ paddingLeft: '1em' }}
                className={styles.tableCols}
                size="6"
              >
                <IonText>
                  <h4>{itemInfo.title}</h4>
                </IonText>
              </IonCol>
              {item.allergens!.map((alergenicId) => {
                const allergenic: Allergenic = allergens[alergenicId];
                const info = allergenic.displayInfo[lang];
                const img: Image =
                  images[allergenic.mainImg || allergenic.defaultImg];

                return (
                  <IonCol
                    className={styles.tableCols}
                    size="1"
                    key={alergenicId}
                  >
                    <div>
                      <img
                        style={{
                          display: 'block',
                          margin: '0 auto',
                          padding: '.2em'
                        }}
                        width="46px"
                        src={img.full?.src}
                        alt={img.full?.title}
                      />
                    </div>
                    <IonText>
                      <p
                        style={{
                          padding: '.2em',
                          margin: '0',
                          textAlign: 'center'
                        }}
                      >
                        {info.title}
                      </p>
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
};

export default AllegenicList;
