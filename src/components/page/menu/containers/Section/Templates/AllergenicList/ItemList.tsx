import React from 'react';
import styles from './styles.module.css';
import { useData } from '../../../../../../../contexts/DataContext';

import { IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
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
  const { get } = useData();
  const items = get({ collection: 'items', from: 'state' });
  const listItems = get({ collection: 'listItems', from: 'state' });
  const allergens = get({ collection: 'allergens', from: 'system' });
  const images = get({ collection: 'images', from: 'state' });

  return (
    <IonGrid>
      {list?.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems.dictionary[itemId];
        const item: Product = items.dictionary[listItem.itemId];
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
                const allergenic: Allergenic =
                  allergens.dictionary[alergenicId];
                const info = allergenic.displayInfo[lang];
                const img: Image =
                  images.dictionary[
                    allergenic.mainImg || allergenic.defaultImg
                  ];

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
