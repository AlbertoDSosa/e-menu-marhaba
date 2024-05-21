import React from 'react';

import { IonRow, IonCol, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';

import { useQuery } from 'hooks/useQuery';
import InfoCardList from '../../../List/Templates/InfoCardList';

const InfoList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (listsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const list = lists[section.lists[0]];

  return (
    <IonRow>
      <IonCol>
        <InfoCardList list={list} lang={lang} />
      </IonCol>
    </IonRow>
  );
};

export default InfoList;
