import React, { useState } from 'react';
import { useQuery } from 'hooks/useQuery';
import { useMutation } from 'hooks/useMutation';
import slugify from 'slugify';
import styles from './styles.module.css';
import { Collapse } from 'react-collapse';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  // IonItemOptions,
  // IonItemOption,
  IonModal,
  IonTextarea,
  IonLoading,
  IonToggle
} from '@ionic/react';

import {
  addOutline,
  chevronDownCircle,
  chevronForwardCircle
} from 'ionicons/icons';
import { DisplayInfo, Item, List, ListItem } from 'definitions/models';
import { Dictionary } from 'definitions/dataContext';

export interface AddItemInfo {
  sameInfo: boolean;
  title: string;
  description?: string;
  slug: string;
  extraInfo?: string;
}

export interface AddItemProps {
  list: List
}

type getDisplayInfoArgs = {
  langs: string[];
  sameInfo: boolean;
  itemInfo: AddItemInfo
}

const AddItem: React.FC<AddItemProps> = ({ list }) => {
  const [showAddItemModal, setShowAddItemModal] = useState<boolean>(false);
  const [collapseList, setCollapseList] = useState<boolean>(false);
  const [itemInfoValue, setItemInfoValue] = useState<AddItemInfo>(
    {
      slug: '',
      title: '',
      extraInfo: '',
      description: '',
      sameInfo: false
    }
  );

  const [toggleSameInfo, setToggleSameInfo] = useState<boolean>(false);

  const { mutate: create } = useMutation({
    resource: 'items',
    action: 'create'
  });

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: listItems, isLoading: listItemsIsLoading } = useQuery(
    {
      key: 'listItems'
    }
  );

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (listItemsIsLoading || itemsIsLoading || generalInfoIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="...Loading"
        spinner="circles"
      />
    );

  const getDisplayInfo = ({ langs, sameInfo, itemInfo } : getDisplayInfoArgs) => {

      const displayInfo: Dictionary = {};

      if(sameInfo) {
        for(let lang of langs) {
          displayInfo[lang] = itemInfo;
        }
      } else {
        langs = langs.filter((value) => value !== 'es');

        displayInfo['es'] = itemInfo;

        for(let lang of langs) {
          displayInfo[lang] = {
            slug: '',
            title: '',
            extraInfo: '',
            description: ''
          };
        }
      }
      return displayInfo;
  }

  const onAddItem = async () => {
    const langs: string[] = generalInfo.appLanguages;

    const displayInfo = getDisplayInfo({
      langs,
      itemInfo: itemInfoValue,
      sameInfo: itemInfoValue.sameInfo
    });

    await create({
      entity: 'item',
      payload: {
        lang: 'es',
        displayInfo
      },
      addToCategories: list.categories,
      addToEntity: 'list',
      entityId: list.id
    });

    setShowAddItemModal(false);
    setToggleSameInfo(false);
    setItemInfoValue({
      slug: '',
      title: '',
      extraInfo: '',
      description: '',
      sameInfo: false
    });
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>
          <h1>Editar Artículos Disponibles</h1>
        </IonLabel>
        <IonButton
          onClick={() => {
            setShowAddItemModal(true);
          }}
        >
          <IonIcon slot="start" icon={addOutline} />
          Añadir Artículo
        </IonButton>
        <IonModal
          isOpen={showAddItemModal}
          className={styles.modal}
          backdropDismiss={false}
        >
          <IonList>
            <IonListHeader>
              <h1>Añadir Artículo</h1>
            </IonListHeader>
            <IonItem>
              <IonTextarea
                inputmode="text"
                wrap="off"
                label="Título:"
                cols={30}
                rows={6}
                value={itemInfoValue.title}
                onIonChange={(e) => {
                  setItemInfoValue((info: any) => {
                    return {
                      ...info,
                      title: e.detail.value,
                      slug: slugify(e.detail.value as string, { lower: true })
                    };
                  });
                }}
              />
            </IonItem>
            <IonItem>
              <IonTextarea
                inputmode="text"
                wrap="off"
                label="Descripción:"
                cols={30}
                rows={6}
                value={itemInfoValue.description}
                onIonChange={(e) => {
                  setItemInfoValue((info: any) => {
                    return { ...info, description: e.detail.value };
                  });
                }}
              />
            </IonItem>
            <IonItem>
              <IonTextarea
                inputmode="text"
                label="Slug:"
                wrap="off"
                cols={30}
                rows={6}
                value={itemInfoValue.slug}
                onIonChange={(e) => {
                  setItemInfoValue((info: any) => {
                    return { ...info, slug: e.detail.value };
                  });
                }}
              />
            </IonItem>
            <IonItem>
                <IonToggle
                  color="dark"
                  onIonChange={() => {
                    setItemInfoValue((info: any) => {
                      setToggleSameInfo(!toggleSameInfo);
                      return { ...info, sameInfo: toggleSameInfo };
                    });

                  }}
                  checked={toggleSameInfo}
                >
                  Misma información en todas las lenguas
                </IonToggle>
            </IonItem>
            <IonItem className="ion-padding-vertical" lines="none">
              <IonButton
                expand="block"
                slot="end"
                size="default"
                onClick={() => {
                  setShowAddItemModal(false);
                }}
              >
                Cancelar
              </IonButton>
              <IonButton
                slot="end"
                size="default"
                expand="block"
                onClick={() => {
                  onAddItem();
                }}
              >
                Guardar
              </IonButton>
            </IonItem>
          </IonList>
        </IonModal>
        {!!list.selectableItems.length && (
          <IonButton
            color="dark"
            onClick={() => setCollapseList(!collapseList)}
          >
            <IonIcon
              icon={collapseList ? chevronDownCircle : chevronForwardCircle}
            />
          </IonButton>
        )}
      </IonListHeader>
      <Collapse isOpened={collapseList} checkTimeout={800}>
        {list.selectableItems?.map((listItemId: string) => {
          const listItem: ListItem = listItems[listItemId];
          const item: Item = items[listItem.itemId];
          const itemInfo: DisplayInfo = item?.displayInfo['es'];

          return (
            <IonItemSliding key={listItemId}>
              {/* <IonItemOptions side="end">
                <IonItemOption
                  onClick={() => {
                    remove({
                      action: 'one',
                      itemId: listItemId,
                      entity: 'listItem',
                      removeToList: 'selectableItems'
                    });
                  }}
                  color="danger"
                  expandable
                >
                  Borrar
                </IonItemOption>
              </IonItemOptions> */}

              <IonItem routerLink={`/config/listItem/${listItemId}`}>
                <IonLabel>{itemInfo?.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          );
        })}
      </Collapse>
    </IonList>
  );
};

export default AddItem;
