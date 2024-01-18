import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { ArrayEditEntity, Dictionary } from 'definitions/dataContext';

import { useQuery } from '../../../../hooks/useQuery';

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
  IonToggle,
  IonText,
  IonLoading
} from '@ionic/react';

import { reorderFourOutline } from 'ionicons/icons';

import {
  List,
  ListItem,
  PageMenu,
  PageMenuItem,
  Item,
  DisplayInfo
} from 'definitions/models';

interface EditItemsProps {
  entityId: string;
  entity: ArrayEditEntity;
}

const customSelectProps = {
  cssClass: 'addItemSelect'
};

const EditItems: React.FC<EditItemsProps> = ({ entityId, entity }) => {
  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');

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

  const { dictionary: lists, isLoading: listsIsLoading } = useQuery({
    key: 'lists'
  });

  const { dictionary: _listItems, isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  if (
    generalInfoIsLoading ||
    itemsIsLoading ||
    pageMenusIsLoading ||
    pageMenuItemsIsLoading ||
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
  let list: List | PageMenu;
  let listItems: Dictionary;

  if (entity === 'pageMenu') {
    listItems = pageMenuItems;
    list = menus[entityId] as PageMenu;
  } else {
    listItems = _listItems;
    list = lists[entityId] as List;
  }

  console.log(entity, entityId, list.items, listItems);

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    // const from = event.detail.from;
    // const to = event.detail.to;
    // reorder({ entity, entityId, from, to });

    event.detail.complete();
  };

  const doAddItem = (itemId: string) => {
    // add({ entity, entityId, itemId });
  };

  const doDeleteItem = (itemId: string) => {
    // remove({ entity, entityId, itemId, action: 'one' });
  };

  const doDeleteAllItems = () => {
    // remove({ action: 'many', entity, entityId, items: list.items });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>{`Artículos ${
            entity === 'pageMenu' ? 'del menu' : 'de la lista'
          }`}</h2>
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
                let listItem: PageMenuItem | ListItem;
                if (entity === 'pageMenu') {
                  listItem = listItems[itemId] as PageMenuItem;
                } else {
                  listItem = listItems[itemId] as ListItem;
                }

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
          const listItem: ListItem | PageMenuItem = listItems[itemId];
          const item = items[listItem?.itemId];
          const info = item?.displayInfo[language];
          return (
            <IonItemSliding key={itemId}>
              <IonItemOptions side="end">
                {list.editable && disabledReorderItems && (
                  <IonItemOption
                    onClick={() => {
                      doDeleteItem(itemId);
                    }}
                    color="danger"
                    expandable
                  >
                    Borrar
                  </IonItemOption>
                )}
              </IonItemOptions>
              {entity === 'pageMenu' ? (
                <IonItem>
                  <IonReorder slot="start">
                    <IonIcon icon={reorderFourOutline} />
                  </IonReorder>
                  <IonLabel>{info?.title}</IonLabel>
                  {disabledReorderItems && (
                    <IonToggle
                      color="dark"
                      justify="space-between"
                      checked={listItem.show}
                      // onIonChange={() => {
                      //   set({
                      //     action: 'show',
                      //     info: 'item',
                      //     entity: 'pageMenuItem',
                      //     id: itemId
                      //   });
                      // }}
                    >
                      Mostrar {info.title}
                    </IonToggle>
                  )}
                </IonItem>
              ) : (
                <IonItem routerLink={`/config/${entity}Item/${itemId}`}>
                  <IonReorder slot="start">
                    <IonIcon icon={reorderFourOutline} />
                  </IonReorder>
                  <IonLabel>{info?.title}</IonLabel>
                </IonItem>
              )}
            </IonItemSliding>
          );
        })}
      </IonReorderGroup>
    </IonList>
  );
};

export default EditItems;
