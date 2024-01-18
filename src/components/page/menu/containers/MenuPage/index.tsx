import React from 'react';
import Templates from './Templates';
import { IonContent, IonLoading } from '@ionic/react';

import { useQuery } from '../../../../../hooks/useQuery';
import { Page } from '../../../../../definitions/models';

interface MenuPageProps {
  lang: string;
  pageId: string;
}

const MenuPageContainer: React.FC<MenuPageProps> = ({ pageId, lang }) => {
  const { isLoading: pagesIsLoading, dictionary: pages } = useQuery({
    key: 'pages'
  });

  if (pagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const page: Page = pages[pageId];

  return (
    <IonContent fullscreen style={{ position: 'relative' }}>
      <Templates page={page} lang={lang} />
    </IonContent>
  );
};

export default MenuPageContainer;
