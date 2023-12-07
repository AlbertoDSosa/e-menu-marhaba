import React from 'react';

import styles from '../../styles.module.css';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';

import PageSectionTemplate from '../../../Section';
import { PageSection } from '../../../../../../../definitions/models';

const SingleSection: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { get } = useData();
  const sections = get({ collection: 'pageSections', from: 'system' });
  const section: PageSection = sections.dictionary[page.sections[0]];

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
