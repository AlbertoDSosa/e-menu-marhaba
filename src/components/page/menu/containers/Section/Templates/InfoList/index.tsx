import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import InfoCardList from '../../../List/Templates/InfoCardList';

const InfoList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { get } = useData();
  const lists = get({ collection: 'lists', from: 'state' });
  const list = lists.dictionary[section.lists[0]];

  return (
    <IonRow>
      <IonCol>
        <InfoCardList list={list} lang={lang} />
      </IonCol>
    </IonRow>
  );
};

export default InfoList;
