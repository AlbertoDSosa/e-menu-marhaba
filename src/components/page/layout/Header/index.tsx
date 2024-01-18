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
  IonModal,
  IonLoading
} from '@ionic/react';

import {
  home,
  arrowBackOutline,
  informationCircleOutline,
  qrCode
} from 'ionicons/icons';

import { useQuery } from '../../../../hooks/useQuery';
import { Image } from 'definitions/models';

interface MenuHeaderProps
  extends RouteComponentProps<{
    pageId: string;
    menuId: string;
    lang: string;
  }> {}

const Header: React.FC<MenuHeaderProps> = ({ history, match }) => {
  const lang = match.params.lang;

  const { dictionary: pages, isLoading: isPagesLoading } = useQuery({
    key: 'pages'
  });
  const { dictionary: menus, isLoading: isMenusLoading } = useQuery({
    key: 'pageMenus'
  });
  const { isLoading: isGeneralInfoLoading, dictionary: generalInfo } = useQuery(
    { key: 'generalInfo' }
  );
  const { isLoading: isImagesLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  const [qrImage, setQRImage] = useState<Image>({} as Image);
  const [showQRModal, setShowQRModal] = useState(false);

  let title = '';

  if (
    isGeneralInfoLoading ||
    isImagesLoading ||
    isPagesLoading ||
    isMenusLoading
  )
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const info = generalInfo.displayInfo[lang];

  if (match.path === '/page/:lang/:pageId') {
    const pageId = match.params.pageId;
    title = pages[pageId].displayInfo[lang].title;
  } else {
    const menuId = match.params.menuId;
    title = menus[menuId].displayInfo[lang].title;
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
