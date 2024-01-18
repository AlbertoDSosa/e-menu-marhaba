import { useState } from 'react';
import { useQuery } from '../../../../../../../hooks/useQuery';
import { Item, PageMenuItem } from 'definitions/models';
import styles from './styles.module.css';

import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonModal,
  IonLoading,
  IonCardHeader,
  IonCardTitle
  // IonCardContent
  // IonCardSubtitle
} from '@ionic/react';

import Modal from 'components/page/menu/containers/Modal';

interface CardListProps {
  menus: Array<string>;
  lang: string;
}

const CardList: React.FC<CardListProps> = ({ menus, lang }) => {
  const { dictionary: pageMenuItems, isLoading: isMenuItemsLoading } = useQuery(
    { key: 'pageMenuItems' }
  );

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { dictionary: modals, isLoading: modalsIsLoading } = useQuery({
    key: 'modals'
  });

  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (
    itemsIsLoading ||
    modalsIsLoading ||
    imagesIsLoading ||
    isMenuItemsLoading
  )
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  return (
    <IonGrid style={{ width: '70vw' }}>
      <IonRow
        className="ion-justify-content-center ion-align-items-center"
        style={{ height: '80vh' }}
      >
        {menus?.map((menuId) => {
          const menuItem: PageMenuItem = pageMenuItems[menuId];
          const item: Item = items[menuItem.itemId];
          const info = item.displayInfo;
          const title = info[lang].title;
          const image = images[item.mainImg || item.defaultImg];
          const subMenuPath = `/menu/${lang}/submenus/${menuItem.subMenu}`;
          const pagePath = `/menu/${lang}/detail/${menuItem.page}`;
          const modal = modals[menuItem.modal];

          const [showModal, setShowModal] = useState(false);

          if (!menuItem.show) {
            return false;
          }

          return menuItem.isModalMode ? (
            <IonCol size="3" key={menuId}>
              <IonCard
                style={{ height: '24em' }}
                onClick={() => setShowModal(true)}
                key={menuItem.id}
              >
                {image && (
                  <IonImg
                    src={image.thumbnail.src}
                    alt={image.thumbnail.title}
                  />
                )}
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center">
                    {title}
                  </IonCardTitle>
                  {/* <IonCardSubtitle>{info.title}</IonCardSubtitle> */}
                </IonCardHeader>
                {/* <IonCardContent>{info.description}</IonCardContent> */}
              </IonCard>
              <IonModal
                isOpen={showModal}
                onDidDismiss={() => setShowModal(false)}
                className={styles.modal}
              >
                <Modal modal={modal} lang={lang} />
              </IonModal>
            </IonCol>
          ) : (
            <IonCol size="3" key={menuId}>
              <IonCard
                style={{ height: '24em' }}
                routerLink={menuItem.hasSubMenu ? subMenuPath : pagePath}
                key={menuItem.id}
              >
                {image && (
                  <IonImg
                    src={image.thumbnail.src}
                    alt={image.thumbnail.title}
                  />
                )}
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center">
                    {title}
                  </IonCardTitle>
                  {/* <IonCardSubtitle>{info.title}</IonCardSubtitle> */}
                </IonCardHeader>
                {/* <IonCardContent>{info.description}</IonCardContent> */}
              </IonCard>
            </IonCol>
          );
        })}
      </IonRow>
    </IonGrid>
  );
};

export default CardList;
