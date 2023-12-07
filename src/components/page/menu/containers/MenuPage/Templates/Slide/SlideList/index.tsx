import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { useData } from '../../../../../../../../contexts/DataContext';

import PageSectionTemplate from '../../../../Section';
import { PageSection } from '../../../../../../../../definitions/models';

interface SlideListProps {
  sectionIds: string[];
  lang: string;
}

const SlideList: React.FC<SlideListProps> = ({ sectionIds, lang }) => {
  const { get } = useData();

  const sections = get({ collection: 'pageSections', from: 'system' });

  return (
    <>
      {sectionIds.map((sectionKey) => {
        const section: PageSection = sections.dictionary[sectionKey];
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
