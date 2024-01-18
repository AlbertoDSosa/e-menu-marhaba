import React from 'react';
import { IonLoading } from '@ionic/react';
import styles from '../../styles.module.css';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';

import PageSectionTemplate from '../../../Section';
import { PageSection } from '../../../../../../../definitions/models';

const SingleSection: React.FC<TemplatesProps> = ({ page, lang }) => {
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
  const section: PageSection = sections[page.sections[0]];
  return (
    <div
      className={styles.backgroundImg}
      style={{ height: '90vh', padding: '.5em' }}
    >
      <div
        style={{
          padding: '.5em',
          width: '90vw',
          height: '88.5vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <PageSectionTemplate section={section} lang={lang} />
      </div>
    </div>
  );
};

export default SingleSection;
