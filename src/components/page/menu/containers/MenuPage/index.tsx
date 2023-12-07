import React from 'react';
import Templates from './Templates';
import { IonContent } from '@ionic/react';

import { useData } from '../../../../../contexts/DataContext';
import { Page } from '../../../../../definitions/models';

interface MenuPageProps {
  lang: string;
  pageId: string;
}

const MenuPageContainer: React.FC<MenuPageProps> = ({ pageId, lang }) => {
  const { get } = useData();
  const pages = get({ collection: 'pages', from: 'system' });
  const page: Page = pages.dictionary[pageId];

  return (
    <IonContent fullscreen style={{ position: 'relative' }}>
      <Templates page={page} lang={lang} />
    </IonContent>
  );
};

export default MenuPageContainer;
