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
        const { mutate } = useMutation({
          resource,
          action: 'update'
        });

        const language = languages[lang].title[generalInfo.baseLanguage];

        const [showModal, setShowModal] = useState(false);

        const updateDisplayInfo = (displayInfo: any) => {
          mutate({
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
    </>
  );
};

export default LangList;
