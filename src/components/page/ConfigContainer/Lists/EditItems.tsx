import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { ArrayEditEntity, Dictionary, Key } from 'definitions/dataContext';

import { useQuery } from '../../../../hooks/useQuery';
import { useMutation } from '../../../../hooks/useMutation';

import './styles.css';

import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonButton,
  IonReorderGroup,
  IonReorder,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonList,
  // IonToggle,
  // IonText,
  IonLoading
} from '@ionic/react';

import { reorderFourOutline } from 'ionicons/icons';

import { List, ListItem, Item, DisplayInfo } from 'definitions/models';

interface EditItemsProps {
  entityId: string;
  entity: ArrayEditEntity;
  index: Key;
}

const customSelectProps = {
  cssClass: 'addItemSelect'
};

const EditItems: React.FC<EditItemsProps> = ({ entityId, entity, index }) => {
  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');
  const { mutate } = useMutation({ resource: 'lists', action: 'set' });

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { dictionary: lists, isLoading: listsIsLoading } = useQuery({
    key: 'lists'
  });

  const { dictionary: listItems, isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  if (
    generalInfoIsLoading ||
    itemsIsLoading ||
    listsIsLoading ||
    listItemsIsLoading
  )
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const language = generalInfo.baseLanguage;
  const list: List = lists[entityId];

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    const from = event.detail.from;
    const to = event.detail.to;
    // reorder({ entity, entityId, from, to });

    event.detail.complete();
  };

  const doAddItem = (itemId: string) => {
    // add({ entity, entityId, itemId });
  };

  const doRemoveItem = (itemId: string) => {
    // remove({ entity, entityId, itemId, action: 'one' });
  };

  const doRemoveAllItems = () => {
    // remove({ action: 'many', entity, entityId, items: list.items });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Artículosde la lista</h2>
        </IonLabel>
        {list.items.length > 1 && (
          <IonButton
            color={disabledReorderItems ? 'danger' : 'success'}
            onClick={() => setDisabledReorderItems(!disabledReorderItems)}
          >
            Ordenar
          </IonButton>
        )}
        {list.editable && list.items.length < list.maxItems && (
          <IonButton
            color="primary"
            disabled={!itemIdValue || !disabledReorderItems}
            onClick={() => {
              doAddItem(itemIdValue);
              setItemIdValue('');
            }}
          >
            Añadir
          </IonButton>
        )}

        {list.editable && list.items.length >= 1 && (
          <IonButton
            disabled={!disabledReorderItems}
            color="danger"
            onClick={doRemoveAllItems}
          >
            Borrar Todo
          </IonButton>
        )}
      </IonListHeader>
      {list.editable &&
        list.items.length < list.maxItems &&
        disabledReorderItems && (
          <IonItem>
            <IonLabel>Artículos Disponibles</IonLabel>
            <IonSelect
              value={itemIdValue}
              placeholder="Selecciona Artículo"
              cancelText="Cancelar"
              okText="Elegir"
              interfaceOptions={customSelectProps}
              onIonChange={(e) => setItemIdValue(e.detail.value)}
            >
              {list.selectableItems.map((itemId: string) => {
                const listItem: ListItem = listItems[itemId];
                const item: Item = items[listItem.itemId];
                const info: DisplayInfo = item?.displayInfo[language];

                return (
                  <IonSelectOption key={itemId} value={itemId}>
                    {info?.title}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>
        )}
      <IonReorderGroup
        disabled={disabledReorderItems}
        onIonItemReorder={doReorder}
      >
        {list.items.map((itemId: string) => {
          const listItem: ListItem = listItems[itemId];
          const item = items[listItem?.itemId];
          const info = item?.displayInfo[language];
          return (
            <IonItemSliding key={itemId}>
              <IonItemOptions side="end">
                {list.editable && disabledReorderItems && (
                  <IonItemOption
                    onClick={() => {
                      doRemoveItem(itemId);
                    }}
                    color="danger"
                    expandable
                  >
                    Borrar
                  </IonItemOption>
                )}
              </IonItemOptions>
              <IonItem routerLink={`/config/${entity}Item/${itemId}`}>
                <IonReorder slot="start">
                  <IonIcon icon={reorderFourOutline} />
                </IonReorder>
                <IonLabel>{info?.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          );
        })}
      </IonReorderGroup>
    </IonList>
  );
};

export default EditItems;
