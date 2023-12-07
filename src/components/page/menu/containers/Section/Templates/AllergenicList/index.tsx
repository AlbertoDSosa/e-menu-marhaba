import React from 'react';

import { IonRow, IonCol } from '@ionic/react';

import { TemplatesProps } from '../index';
import ItemList from './ItemList';
import { useData } from '../../../../../../../contexts/DataContext';

const AllergenicList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { get } = useData();
  const lists = get({ key: 'lists', from: 'state' });
  const list = lists.dictionary[section.lists[0]];

  return (
    <IonRow>
      <IonCol>
        <ItemList list={list} lang={lang} />
      </IonCol>
    </IonRow>
  );
};

export default AllergenicList;
