import React from 'react';
import { useQuery } from '../../../../../hooks/useQuery';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonLoading
  // IonCardContent,
  // IonCardHeader,
  // IonCardTitle
  // IonCardSubtitle
} from '@ionic/react';

const FlagsContainer: React.FC = () => {
  const { isLoading: isLangugesLoading, dictionary: languages } = useQuery({
    key: 'languages'
  });
  const { isLoading: isGeneralInfoLoading, dictionary: generalInfo } = useQuery(
    { key: 'generalInfo' }
  );
  const { isLoading: isImagesLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  if (isLangugesLoading || isGeneralInfoLoading || isImagesLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const { appLanguages } = generalInfo;

  return (
    <IonContent fullscreen>
      <IonGrid style={{ width: '70vw', padding: 0 }}>
        <IonRow
          className="ion-justify-content-center ion-align-items-center"
          style={{ height: '55vh' }}
        >
          <img src="assets/img/system/logo-flags-new.jpg" alt="logo" />
        </IonRow>
        <IonRow
          className="ion-justify-content-center"
          style={{ height: '45vh' }}
        >
          {appLanguages.map((lang: string) => {
            const language = languages[lang];
            // const title = language.title[baseLanguage];
            const image = images[language.mainImg];

            return (
              <IonCol size="2.4" key={lang}>
                <IonCard routerLink={`/menus/${lang}/pageMenu->main-menu`}>
                  {image && (
                    <IonImg src={image.full.src} alt={image.full.title} />
                  )}
                </IonCard>
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default FlagsContainer;
