import { useState } from 'react';

import {
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonButton,
  IonIcon,
  IonLoading
} from '@ionic/react';

import {
  createOutline,
  chevronDownCircle,
  chevronForwardCircle
} from 'ionicons/icons';

import { Collapse } from 'react-collapse';

import { useData } from '../../../../contexts/DataContext';

import EditDisplayInfoModal from './Modal';

import { UpdateEntity, DisplayInfoEntity } from 'definitions/dataContext';

import { DisplayInfo } from 'definitions/models';

interface LangListProps {
  entity: DisplayInfoEntity;
  entityName: UpdateEntity;
}

const EditDisplayInfo: React.FC<LangListProps> = ({ entityName, entity }) => {
  const { update, get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        trigger="open-loading"
        message="Loading"
      />
    );
  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const languages = get({ collection: 'languages', from: 'system' });
  const [collapseList, setCollapseList] = useState(false);

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Información por Lenguajes</h2>
        </IonLabel>
        <IonButton color="light" onClick={() => setCollapseList(!collapseList)}>
          <IonIcon
            icon={collapseList ? chevronDownCircle : chevronForwardCircle}
          />
        </IonButton>
      </IonListHeader>
      <Collapse isOpened={collapseList} checkTimeout={800}>
        {generalInfo.dictionary.appLanguages.map((lang: string) => {
          const info: DisplayInfo = entity.displayInfo[lang];
          const language =
            languages.dictionary[lang].title[
              generalInfo.dictionary.baseLanguage
            ];

          const [showModal, setShowModal] = useState(false);

          const updateDisplayInfo = (displayInfo: any) => {
            update({
              field: 'info',
              entity: entityName,
              payload: { id: entity.id, displayInfo, lang }
            });
            setShowModal(false);
          };

          return (
            <IonItem key={lang}>
              <EditDisplayInfoModal
                updateDisplayInfo={updateDisplayInfo}
                showModal={showModal}
                setShowModal={setShowModal}
                displayInfo={info}
              />
              <IonLabel>
                <h2>{language}</h2>
              </IonLabel>
              <IonLabel>
                <h3>Nombre</h3>
                <p>{info?.title}</p>
              </IonLabel>
              {info.description && (
                <IonLabel>
                  <h3>Descripción</h3>
                  <p>{info.description}</p>
                </IonLabel>
              )}
              {info.extraInfo && (
                <IonLabel>
                  <h3>Información Extra</h3>
                  <p>{info.extraInfo}</p>
                </IonLabel>
              )}
              <IonIcon
                icon={createOutline}
                color="dark"
                onClick={() => setShowModal(true)}
              />
            </IonItem>
          );
        })}
      </Collapse>
    </IonList>
  );
};

export default EditDisplayInfo;
