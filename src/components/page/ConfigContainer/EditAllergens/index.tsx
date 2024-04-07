import { useState } from 'react';

import { ItemReorderEventDetail } from '@ionic/core';

import { useQuery } from '../../../../hooks/useQuery';

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

import {
  Allergenic,
  DisplayInfo,
  Product,
  Image
} from '../../../../definitions/models';
import { useMutation } from '../../../../hooks/useMutation';

interface EditAllergensProps {
  product: Product;
}

const customSelectProps = {
  cssClass: 'addItemSelect'
};

const EditAllergens: React.FC<EditAllergensProps> = ({ product }) => {
  const { mutate: reorderAllergens } = useMutation({
    resource: 'items',
    action: 'reorder'
  });

  const { mutate: addAllergens } = useMutation({
    resource: 'items',
    action: 'add'
  });

  const { mutate: removeAllergens } = useMutation({
    resource: 'items',
    action: 'remove'
  });

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: allergens, isLoading: allergensIsLoading } = useQuery({
    key: 'allergens'
  });

  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (generalInfoIsLoading || allergensIsLoading || imagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const productAllergens = product.allergens!;
  const language = generalInfo.baseLanguage;

  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');

  const doReorderAllergens = (event: CustomEvent<ItemReorderEventDetail>) => {
    const from = event.detail.from;
    const to = event.detail.to;

    reorderAllergens({
      entity: 'allergenic',
      entityId: product.id,
      from,
      to
    });

    event.detail.complete();
  };

  const doAddAllergenic = (allergenicId: string) => {
    addAllergens({
      entity: 'allergenic',
      entityId: product.id,
      itemId: allergenicId
    });
  };

  const doRemoveAllergenic = (allergenicId: string) => {
    removeAllergens({
      action: 'one',
      entity: 'allergenic',
      entityId: product.id,
      itemId: allergenicId
    });
  };

  const doRemoveAllAllergens = () => {
    removeAllergens({
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
            onClick={doRemoveAllAllergens}
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
              const allergenic: Allergenic = allergens[allergenicId];
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
        onIonItemReorder={doReorderAllergens}
      >
        {product.allergens!.map((allergenicId: string) => {
          const allergenic: Allergenic = allergens[allergenicId];
          const allergenicImg: Image =
            images[allergenic.mainImg || allergenic.defaultImg];
          const info = allergenic.displayInfo[language];

          return (
            <IonItemSliding key={allergenicId}>
              <IonItemOptions side="end">
                {disabledReorderItems && (
                  <IonItemOption
                    onClick={() => {
                      doRemoveAllergenic(allergenicId);
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
