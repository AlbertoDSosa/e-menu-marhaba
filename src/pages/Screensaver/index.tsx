import React, { useState, useEffect } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonText,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { play, restaurant, pause } from 'ionicons/icons';
import { Image, Slide } from '../../definitions/models';

import { useData } from '../../contexts/DataContext';

const ScreensaverPage: React.FC = () => {
  const { get, loading } = useData();

  const [slider, setSlider] = useState<null | any>(null);
  const [slideRun, setSlideRun] = useState(true);

  const autoplayToggle = () => {
    if (slideRun && slider) {
      slider?.autoplay.stop();
      setSlideRun(false);
    } else {
      slider?.autoplay.start();
      setSlideRun(true);
    }
  };

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const screensaver = get({
    collection: 'screensaver',
    from: 'state'
  }).dictionary;
  const slides = get({ collection: 'slides', from: 'state' });
  const images = get({ collection: 'images', from: 'state' });

  return (
    <IonPage>
      <IonContent fullscreen style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <IonButton
            onClick={() => {
              autoplayToggle();
            }}
            fill="outline"
            size="large"
            color="dark"
          >
            <IonIcon icon={slideRun ? pause : play} />
          </IonButton>
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              {slideRun ? 'Pause' : 'Play'}
            </h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <IonButton href="/flags" fill="outline" color="dark" size="large">
            <IonIcon icon={restaurant} />
          </IonButton>
          <IonText>
            <h2 style={{ margin: '.1em' }}>Menu</h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <img
            width={150}
            height={150}
            src="assets/img/system/touch-screen.png"
            alt="touchscreen"
          />
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              Touch Screen
            </h2>
          </IonText>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            zIndex: 3,
            backgroundColor: 'rgba(255,255,255,90%)'
          }}
        >
          <img
            width={150}
            height={150}
            src="assets/img/qr/qr-web.png"
            alt="touchscreen"
          />
          <IonText>
            <h2 className="ion-text-center" style={{ margin: '.1em' }}>
              e-Menu
            </h2>
          </IonText>
        </div>
        <IonGrid style={{ padding: 0 }}>
          <IonRow style={{ height: '100vh' }} class="ion-align-items-center">
            <IonCol>
              <Swiper
                modules={[Autoplay]}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
                onSwiper={(swiper) => {
                  setSlider(swiper);
                }}
              >
                {screensaver.slides?.map((slideId: string) => {
                  const slide: Slide = slides.dictionary[slideId];
                  const slideImg: Image =
                    images.dictionary[slide?.mainImg || slide?.defaultImg];

                  return (
                    <SwiperSlide key={slideId}>
                      <img src={slideImg.full.src} alt={slideImg.full.title} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ScreensaverPage;
