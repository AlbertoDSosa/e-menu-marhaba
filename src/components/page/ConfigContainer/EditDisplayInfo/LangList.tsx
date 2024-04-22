import React, { useState } from 'react';

import { IonLabel, IonItem, IonIcon } from '@ionic/react';

import { createOutline } from 'ionicons/icons';

import { useQuery } from '../../../../hooks/useQuery';
import { useMutation } from '../../../../hooks/useMutation';
import { DisplayInfo } from 'definitions/models';

import EditDisplayInfoModal from './Modal';
import { LangListProps } from '.';

const LangList: React.FC<LangListProps> = ({
  entityName,
  entity,
  resource
}) => {
  const { dictionary: generalInfo } = useQuery({
    key: 'generalInfo'
  });

  const { dictionary: languages } = useQuery({
    key: 'languages'
  });

  return (
    <>
      {generalInfo.appLanguages.map((lang: string) => {
        const info: DisplayInfo = entity.displayInfo[lang];

        const language = languages[lang].title[generalInfo.baseLanguage];

        const [showModal, setShowModal] = useState(false);
        const [displayInfo, setDisplayInfo] = useState(info);
        return (
          <IonItem key={lang}>
            <EditDisplayInfoModal
              showModal={showModal}
              setShowModal={setShowModal}
              displayInfo={displayInfo}
              setDisplayInfo={setDisplayInfo}
              args={{
                resource,
                entityName,
                entity,
                lang
              }}
            />
            <IonLabel>
              <h2>{language}</h2>
            </IonLabel>
            <IonLabel>
              <h3>Nombre</h3>
              <p>{displayInfo.title}</p>
            </IonLabel>
            {info.description && (
              <IonLabel>
                <h3>Descripción</h3>
                <p>{displayInfo.description}</p>
              </IonLabel>
            )}
            {displayInfo.extraInfo && (
              <IonLabel>
                <h3>Información Extra</h3>
                <p>{displayInfo.extraInfo}</p>
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
    </>
  );
};

export default LangList;
