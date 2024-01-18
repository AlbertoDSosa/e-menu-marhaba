import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { IonLoading } from '@ionic/react';

import { useQuery } from '../../../../../../../../hooks/useQuery';

import PageSectionTemplate from '../../../../Section';
import { PageSection } from '../../../../../../../../definitions/models';

interface SlideListProps {
  sectionIds: string[];
  lang: string;
}

const SlideList: React.FC<SlideListProps> = ({ sectionIds, lang }) => {
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
    <>
      {sectionIds.map((sectionKey) => {
        const section: PageSection = sections[sectionKey];
        return (
          <SwiperSlide key={sectionKey}>
            <PageSectionTemplate section={section} lang={lang} />
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default SlideList;
