import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './styles.module.css';

import { TripadvisorIcon } from '../../../../components/ui/icons/TripadvisorIcon';

import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonTitle,
  IonLabel,
  IonModal
} from '@ionic/react';

import {
  home,
  arrowBackOutline,
  informationCircleOutline,
  qrCode
} from 'ionicons/icons';

import { useData } from '../../../../contexts/DataContext';
import { Image } from 'definitions/models';

interface MenuHeaderProps
  extends RouteComponentProps<{
    pageId: string;
    menuId: string;
    lang: string;
  }> {}

const Header: React.FC<MenuHeaderProps> = ({ history, match }) => {
  const lang = match.params.lang;
  const { get } = useData();

  const pages = get({ collection: 'pages', from: 'system' });
  const menus = get({ collection: 'pageMenus', from: 'state' });
  const images = get({ collection: 'images', from: 'state' }).dictionary;
  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const info = generalInfo.dictionary.displayInfo[lang];

  const [qrImage, setQRImage] = useState<Image>({} as Image);
  const [showQRModal, setShowQRModal] = useState(false);

  let title = '';

  if (match.path === '/page/:lang/:pageId') {
    const pageId = match.params.pageId;
    title = pages.dictionary[pageId].displayInfo[lang].title;
  } else {
    const menuId = match.params.menuId;
    title = menus.dictionary[menuId].displayInfo[lang].title;
  }

  return (
    <IonHeader>
      <IonToolbar style={{ height: '10vh' }}>
        <IonButtons style={{ height: '10vh' }} class="justify-header-content">
          <IonButton
            style={{ height: '100%' }}
            color="dark"
            routerLink="/flags"
          >
            <IonIcon style={{ fontSize: '64px' }} icon={home} />
          </IonButton>
          <IonButton
            style={{ height: '100%' }}
            color="dark"
            onClick={() => history.goBack()}
          >
            <IonIcon style={{ fontSize: '64px' }} icon={arrowBackOutline} />
          </IonButton>
          <IonTitle
            style={{
              fontSize: '2em',
              fontFamily: 'ElMessiri',
              fontWeight: 'bold'
            }}
            color="dark"
            size="large"
          >
            {title}
          </IonTitle>
          <IonButton
            onClick={() => {
              setQRImage(images['image->qr->qr-tripadvisor']);
              setShowQRModal(!showQRModal);
            }}
          >
            <TripadvisorIcon size={36} />
          </IonButton>
          <IonLabel style={{ marginRight: '1em' }}>Tripadvisor</IonLabel>
          <IonButton
            onClick={() => {
              setQRImage(images['image->qr->qr-web']);
              setShowQRModal(!showQRModal);
            }}
          >
            <IonIcon size="large" icon={qrCode} />
          </IonButton>
          <IonLabel style={{ marginRight: '1em' }}>e-Menu</IonLabel>
          <IonIcon
            style={{ marginRight: '.25em' }}
            size="large"
            icon={informationCircleOutline}
          />
          <IonLabel style={{ marginRight: '1em' }}>{info.extraInfo}</IonLabel>
        </IonButtons>
      </IonToolbar>
      <IonModal
        className={styles.modal}
        isOpen={showQRModal}
        onDidDismiss={() => setShowQRModal(!showQRModal)}
      >
        {qrImage.full && (
          <img src={qrImage.full?.src} alt={qrImage.full?.title} />
        )}
      </IonModal>
    </IonHeader>
  );
};

export default withRouter(Header);
