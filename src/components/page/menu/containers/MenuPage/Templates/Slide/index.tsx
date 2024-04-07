import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useQuery } from '../../../../../../../hooks/useQuery';
import styles from '../../styles.module.css';
import slideStyles from './styles.module.css';

import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonLoading
} from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

import { TemplatesProps } from '../index';
import PageSectionTemplate from '../../../Section';
import { PageSection } from 'definitions/models';

const SlideSection: React.FC<TemplatesProps> = ({ page, lang }) => {
  const [slider, setSlider] = useState<null | any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const { isLoading: sectionsIsLoading, dictionary: sections } = useQuery({
    key: 'sections'
  });

  if (sectionsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  return (
    <IonGrid
      className={styles.backgroundImg}
      style={{ height: '90vh', width: '100vw' }}
    >
      <IonRow
        className="ion-align-items-center"
        style={{
          width: '95vw',
          height: '89vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <IonCol>
          <Swiper
            pagination
            modules={[Pagination]}
            onSwiper={(swiper) => {
              setSlider(swiper);
            }}
            onSlideChange={() => {
              setIsBeginning(slider.isBeginning);
              setIsEnd(slider.isEnd);
            }}
          >
            {page.sections.map((sectionKey) => {
              const section: PageSection = sections[sectionKey];
              return (
                <SwiperSlide key={sectionKey}>
                  <PageSectionTemplate section={section} lang={lang} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <IonButton
            onClick={(e) => slider.slidePrev(400)}
            className={slideStyles.navigationButton}
            size="large"
            style={{
              position: 'absolute',
              top: '40%',
              left: '0',
              fontSize: '2.5em',
              zIndex: '10'
            }}
            color="dark"
            fill="clear"
            disabled={isBeginning}
          >
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonButton
            onClick={(e) => slider.slideNext(400)}
            className={slideStyles.navigationButton}
            size="large"
            style={{
              position: 'absolute',
              top: '40%',
              right: '0',
              fontSize: '2.5em',
              zIndex: '10'
            }}
            color="dark"
            fill="clear"
            disabled={isEnd}
          >
            <IonIcon icon={chevronForwardOutline} />
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SlideSection;
