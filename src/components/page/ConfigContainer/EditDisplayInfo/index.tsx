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

import { useQuery } from '../../../../hooks/useQuery';

import { UpdateEntity, DisplayInfoEntity, Key } from 'definitions/dataContext';

import LangList from './LangList';

export interface LangListProps {
  entity: DisplayInfoEntity;
  entityName: UpdateEntity;
  resource: Key;
}

const EditDisplayInfo: React.FC<LangListProps> = ({
  entityName,
  entity,
  resource
}) => {
  const [collapseList, setCollapseList] = useState(false);
  const { isLoading: generalInfoIsLoading } = useQuery({
    key: 'generalInfo'
  });

  const { isLoading: languagesIsLoading } = useQuery({
    key: 'languages'
  });

  if (generalInfoIsLoading || languagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

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
        <LangList entity={entity} entityName={entityName} resource={resource} />
      </Collapse>
    </IonList>
  );
};

export default EditDisplayInfo;
