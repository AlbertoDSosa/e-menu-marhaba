import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { useData } from '../../../../contexts/DataContext';

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
  IonThumbnail,
  IonLoading
} from '@ionic/react';

import { reorderFourOutline } from 'ionicons/icons';

import { Allergenic, DisplayInfo, Product, Image } from 'definitions/models';

interface EditAllergensProps {
  product: Product;
}

const customSelectProps = {
  cssClass: 'addItemSelect'
};

const EditAllergens: React.FC<EditAllergensProps> = ({ product }) => {
  const { reorder, add, remove, get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const allergens = get({ collection: 'allergens', from: 'system' });

  const images = get({ collection: 'images', from: 'state' });
  const productAllergens = product.allergens!;
  const language = generalInfo.dictionary.baseLanguage;

  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    const from = event.detail.from;
    const to = event.detail.to;
    reorder({ entity: 'allergenic', entityId: product.id, from, to });

    event.detail.complete();
  };

  const doAddAllergenic = (allergenicId: string) => {
    add({ entity: 'allergenic', entityId: product.id, itemId: allergenicId });
  };

  const doDeleteAllergenic = (allergenicId: string) => {
    remove({
      action: 'one',
      entity: 'allergenic',
      entityId: product.id,
      itemId: allergenicId
    });
  };

  const doDeleteAllAllergens = () => {
    remove({
      action: 'many',
      entity: 'allergenic',
      entityId: product.id,
      items: product.allergens
    });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Alergénicos</h2>
        </IonLabel>
        {productAllergens.length > 1 && (
          <IonButton
            color={disabledReorderItems ? 'danger' : 'success'}
            onClick={() => setDisabledReorderItems(!disabledReorderItems)}
          >
            Ordenar
          </IonButton>
        )}

        <IonButton
          color="primary"
          disabled={!itemIdValue || !disabledReorderItems}
          onClick={() => {
            doAddAllergenic(itemIdValue);
            setItemIdValue('');
          }}
        >
          Añadir
        </IonButton>

        {productAllergens.length >= 1 && (
          <IonButton
            disabled={!disabledReorderItems}
            color="danger"
            onClick={doDeleteAllAllergens}
          >
            Borrar Todo
          </IonButton>
        )}
      </IonListHeader>
      {productAllergens && disabledReorderItems ? (
        <IonItem>
          <IonLabel>Alergénicos Disponibles</IonLabel>
          <IonSelect
            value={itemIdValue}
            placeholder="Selecciona Alergénico"
            cancelText="Cancelar"
            okText="Elegir"
            interfaceOptions={customSelectProps}
            onIonChange={(e) => setItemIdValue(e.detail.value)}
          >
            {product.selectableAllergens?.map((allergenicId: string) => {
              const allergenic: Allergenic = allergens.dictionary[allergenicId];
              const info: DisplayInfo = allergenic.displayInfo[language];

              return (
                <IonSelectOption key={allergenicId} value={allergenicId}>
                  {info?.title}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      ) : (
        ''
      )}
      <IonReorderGroup
        disabled={disabledReorderItems}
        onIonItemReorder={doReorder}
      >
        {product.allergens!.map((allergenicId: string) => {
          const allergenic: Allergenic = allergens.dictionary[allergenicId];
          const allergenicImg: Image =
            images.dictionary[allergenic.mainImg || allergenic.defaultImg];
          const info = allergenic.displayInfo[language];

          return (
            <IonItemSliding key={allergenicId}>
              <IonItemOptions side="end">
                {disabledReorderItems && (
                  <IonItemOption
                    onClick={() => {
                      doDeleteAllergenic(allergenicId);
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
                <IonThumbnail slot="start">
                  <img
                    src={allergenicImg.thumbnail.src}
                    alt={allergenicImg.thumbnail.title}
                  />
                </IonThumbnail>
                <IonLabel>{info?.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          );
        })}
      </IonReorderGroup>
    </IonList>
  );
};

export default EditAllergens;
