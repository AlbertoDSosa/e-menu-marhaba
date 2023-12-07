import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { Results, ArrayEditEntity } from 'definitions/dataContext';

import { useData } from '../../../../contexts/DataContext';

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
  const { reorder, add, set, remove, get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        trigger="open-loading"
        message="Loading"
      />
    );

  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const items = get({ collection: 'items', from: 'state' });

  let list: List | PageMenu;
  let listItems: Results;

  if (entity === 'pageMenu') {
    const menus = get({ collection: 'pageMenus', from: 'state' });
    listItems = get({ collection: 'pageMenuItems', from: 'state' });
    list = menus.dictionary[entityId] as PageMenu;
  } else {
    const lists = get({ collection: 'lists', from: 'state' });
    listItems = get({ collection: 'listItems', from: 'state' });
    list = lists.dictionary[entityId] as List;
  }

  const language = generalInfo.dictionary.baseLanguage;

  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    const from = event.detail.from;
    const to = event.detail.to;
    reorder({ entity, entityId, from, to });

    event.detail.complete();
  };

  const doAddItem = (itemId: string) => {
    add({ entity, entityId, itemId });
  };

  const doDeleteItem = (itemId: string) => {
    remove({ entity, entityId, itemId, action: 'one' });
  };

  const doDeleteAllItems = () => {
    remove({ action: 'many', entity, entityId, items: list.items });
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
                  listItem = listItems?.dictionary[itemId] as PageMenuItem;
                } else {
                  listItem = listItems?.dictionary[itemId] as ListItem;
                }

                const item: Item = items.dictionary[listItem.itemId];
                const info: DisplayInfo = item.displayInfo[language];

                return (
                  <IonSelectOption key={itemId} value={itemId}>
                    {info.title}
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
          const listItem: ListItem | PageMenuItem =
            listItems.dictionary[itemId];
          const item = items.dictionary[listItem.itemId];
          const info = item.displayInfo[language];

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
                    <>
                      <IonText>
                        <p style={{ marginRight: '1em' }}>Mostrar Artículo</p>
                      </IonText>
                      <IonToggle
                        color="dark"
                        checked={listItem.show}
                        onIonChange={() => {
                          set({
                            action: 'show',
                            info: 'item',
                            entity: 'pageMenuItem',
                            id: itemId
                          });
                        }}
                      />
                    </>
                  )}
                </IonItem>
              ) : (
                <IonItem routerLink={`/config/${entity}Item/${itemId}`}>
                  <IonReorder slot="start">
                    <IonIcon icon={reorderFourOutline} />
                  </IonReorder>
                  <IonLabel>{info.title}</IonLabel>
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
