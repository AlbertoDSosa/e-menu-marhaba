import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { ArrayEditEntity, Key } from 'definitions/dataContext';

import { useQuery } from 'hooks/useQuery';
import { useMutation } from 'hooks/useMutation';
import MenuItem from './MenuItem';

import './styles.css';

import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonButton,
  IonReorderGroup,
  IonSelect,
  IonSelectOption,
  IonList,
  IonLoading
} from '@ionic/react';

import { PageMenu, PageMenuItem, Item, DisplayInfo } from 'definitions/models';

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
  const { mutate: reorder } = useMutation({
    resource: 'pageMenus',
    action: 'reorder'
  });

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { dictionary: menus, isLoading: pageMenusIsLoading } = useQuery({
    key: 'pageMenus'
  });

  const { dictionary: pageMenuItems, isLoading: pageMenuItemsIsLoading } =
    useQuery({
      key: 'pageMenuItems'
    });

  if (
    generalInfoIsLoading ||
    itemsIsLoading ||
    pageMenusIsLoading ||
    pageMenuItemsIsLoading
  )
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const language = generalInfo.baseLanguage;
  let list: PageMenu = menus[entityId];

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    const from = event.detail.from;
    const to = event.detail.to;
    reorder({ entity, entityId, from, to });

    event.detail.complete();
  };

  const doAddItem = (itemId: string) => {
    // add({ entity, entityId, itemId });
  };

  const doDeleteAllItems = () => {
    // remove({ action: 'many', entity, entityId, items: list.items });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Artículos del menu</h2>
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
            onClick={doDeleteAllItems}
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
                const pageMenuItem: PageMenuItem = pageMenuItems[itemId];
                const item: Item = items[pageMenuItem.itemId];
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
        {list.items?.map((itemId: string) => {
          const pageMenuItem: PageMenuItem = pageMenuItems[itemId];
          const item = items[pageMenuItem.itemId];
          const info = item?.displayInfo[language];

          return (
            <MenuItem
              key={itemId}
              info={info}
              pageMenuItem={pageMenuItem}
              editableList={list.editable}
              disabledReorderItems={disabledReorderItems}
            />
          );
        })}
      </IonReorderGroup>
    </IonList>
  );
};

export default EditItems;
