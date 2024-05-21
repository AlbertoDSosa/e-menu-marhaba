import { useState } from 'react';
import { useQuery } from 'hooks/useQuery';
import styles from './styles.module.css';

import Modal from 'components/page/menu/containers/Modal';
import { Item, PageMenuItem } from 'definitions/models';
import {
  IonCol,
  IonCard,
  IonImg,
  IonModal,
  IonLoading,
  IonCardHeader,
  IonCardTitle
  // IonCardContent
  // IonCardSubtitle
} from '@ionic/react';

interface MenuCardPros {
  menuItem: PageMenuItem;
  lang: string;
}

const MenuCard: React.FC<MenuCardPros> = ({ menuItem, lang }) => {
  const [showModal, setShowModal] = useState(false);

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });
  const { dictionary: modals, isLoading: modalsIsLoading } = useQuery({
    key: 'modals'
  });
  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (itemsIsLoading || modalsIsLoading || imagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const item: Item = items[menuItem.itemId];
  const info = item.displayInfo;
  const title = info[lang].title;
  const image = images[item.mainImg || item.defaultImg];
  const subMenuPath = `/menus/${lang}/${menuItem.subMenu}`;
  const pagePath = `/page/${lang}/${menuItem.page}`;
  const modal = modals[menuItem.modal];

  return menuItem.isModalMode ? (
    <IonCol size="3">
      <IonCard
        style={{ height: '24em' }}
        onClick={() => setShowModal(true)}
        key={menuItem.id}
      >
        {image && (
          <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
        )}
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
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
    <IonCol size="3">
      <IonCard
        style={{ height: '24em' }}
        routerLink={menuItem.hasSubMenu ? subMenuPath : pagePath}
        key={menuItem.id}
      >
        {image && (
          <IonImg src={image.thumbnail.src} alt={image.thumbnail.title} />
        )}
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">{title}</IonCardTitle>
          {/* <IonCardSubtitle>{info.title}</IonCardSubtitle> */}
        </IonCardHeader>
        {/* <IonCardContent>{info.description}</IonCardContent> */}
      </IonCard>
    </IonCol>
  );
};

export default MenuCard;
