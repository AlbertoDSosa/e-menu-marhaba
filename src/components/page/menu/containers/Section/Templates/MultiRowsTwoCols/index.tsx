import React from 'react';
import { IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';
import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import {
  ProductList,
  InfoList,
  Image,
  SectionTemplate
} from '../../../../../../../definitions/models';

import ItemList from '../../../List/Templates/ItemList';

const MultiRowsTwoCols: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: templatesIsLoading, dictionary: templates } = useQuery({
    key: 'templates'
  });

  const { isLoading: imagesIsLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (imagesIsLoading || listsIsLoading || templatesIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const sectionTemplate = templates[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  return (
    <IonGrid
      style={{
        height: sectionStyles.grid?.height,
        width: sectionStyles.grid?.width,
        padding: sectionStyles.grid?.padding
      }}
    >
      {section.lists.map((listId: string) => {
        const list: ProductList | InfoList = lists[listId];
        const listImg: Image = images[list.mainImg || list.defaultImg];
        return (
          <IonRow style={{ width: '85vw', margin: '0 auto' }} key={listId}>
            <IonCol
              style={{ paddingLeft: '1em' }}
              size={sectionStyles.list?.colSize}
            >
              <ItemList list={list} lang={lang} />
            </IonCol>
            <IonCol size={sectionStyles.img?.colSize}>
              <img src={listImg.full.src} alt={listImg.full.title} />
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default MultiRowsTwoCols;
