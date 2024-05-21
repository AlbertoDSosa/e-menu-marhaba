import React, { useState } from 'react';
import { useMutation } from 'hooks/useMutation';
import { PageMenuItem } from 'definitions/models';

import {
  IonItem,
  IonLabel,
  IonReorder,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonToggle
} from '@ionic/react';

import { reorderFourOutline } from 'ionicons/icons';

interface EditItemsProps {
  info: any;
  pageMenuItem: PageMenuItem;
  editableList: boolean;
  disabledReorderItems: boolean;
}

const ItemList: React.FC<EditItemsProps> = ({
  info,
  pageMenuItem,
  editableList,
  disabledReorderItems
}) => {
  const { mutate } = useMutation({ resource: 'pageMenuItems', action: 'set' });

  const [toggleShow, setToggleShow] = useState<boolean>(pageMenuItem.show);

  const doDeleteItem = (itemId: string) => {
    // remove({ entity, entityId, itemId, action: 'one' });
  };

  return (
    <IonItemSliding>
      <IonItemOptions side="end">
        {editableList && disabledReorderItems && (
          <IonItemOption
            onClick={() => {
              doDeleteItem(pageMenuItem.id);
            }}
            color="danger"
            expandable
          >
            Borrar
          </IonItemOption>
        )}
      </IonItemOptions>
      <IonItem>
        <IonReorder slot="start">
          <IonIcon icon={reorderFourOutline} />
        </IonReorder>
        <IonLabel>{info?.title}</IonLabel>
        {disabledReorderItems && (
          <IonToggle
            color="dark"
            justify="space-between"
            checked={toggleShow}
            onIonChange={() => {
              setToggleShow(!toggleShow);
              mutate({
                action: 'show',
                info: 'item',
                entity: 'pageMenuItem',
                id: pageMenuItem.id
              });
            }}
          >
            Mostrar {info?.title}
          </IonToggle>
        )}
      </IonItem>
      {/* <IonItem routerLink={`/config/${entity}Item/${itemId}`}>
          <IonReorder slot="start">
            <IonIcon icon={reorderFourOutline} />
          </IonReorder>
          <IonLabel>{info?.title}</IonLabel>
        </IonItem> */}
    </IonItemSliding>
  );
};

export default ItemList;
