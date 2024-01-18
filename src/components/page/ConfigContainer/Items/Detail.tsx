import { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonIcon,
  IonInput,
  IonLoading
} from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';

import { useQuery } from '../../../../hooks/useQuery';

import EditDisplayInfo from '../EditDisplayInfo';
import EditAllergens from '../EditAllergens';

import PriceInput from './PriceInput';
import VariantsPriceInput from './VariantsPriceInput';
import { Product } from 'definitions/models';
import EditImage from '../EditImage';

interface ItemDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ItemDetail: React.FC<ItemDetailPageProps> = ({ match }) => {
  const [showNumberInput, setShowNumberInput] = useState(false);
  const [numberValue, setNumberValue] = useState('');

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (itemsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const item: Product = items[match.params.key];

  const updateNumber = (number: string) => {
    // update({
    //   field: 'number',
    //   entity: 'item',
    //   payload: { id: item.id, number }
    // });
    setShowNumberInput(!showNumberInput);
  };

  return (
    item && (
      <IonContent>
        <EditDisplayInfo entityName="item" entity={item} />
        <IonList>
          <IonListHeader color="dark">
            <h4>Otra Información</h4>
          </IonListHeader>
          {item.type === 'product' && !item.hasVariants && (
            <PriceInput product={item} />
          )}
          {item.type === 'product' && item.hasVariants && (
            <VariantsPriceInput product={item} />
          )}
          {item.number && (
            <IonItem>
              {!showNumberInput ? (
                <>
                  <IonLabel>{`Número de Artículo: ${item.number}`}</IonLabel>
                  <IonIcon
                    icon={createOutline}
                    size="large"
                    color="dark"
                    onClick={() => setShowNumberInput(!showNumberInput)}
                    slot="end"
                  />
                </>
              ) : (
                <>
                  <IonLabel>Número de Artículo: </IonLabel>
                  <IonInput
                    value={item.number}
                    onIonChange={(e) => setNumberValue(e.detail.value || '')}
                  />
                  <IonIcon
                    icon={closeCircleOutline}
                    size="large"
                    color="dark"
                    onClick={() => {
                      setNumberValue(item.number);
                      setShowNumberInput(!showNumberInput);
                    }}
                  />
                  <IonIcon
                    icon={saveOutline}
                    size="large"
                    color="dark"
                    onClick={() => updateNumber(numberValue)}
                  />
                </>
              )}
            </IonItem>
          )}
          {/* <IonItem>
          <IonLabel>Activo</IonLabel>
          <IonToggle
            color="dark"
            checked={item.active}
            onIonChange={() => {
              setActive('item', item.id);
            }}
          />
        </IonItem> */}
        </IonList>
        {item?.hasAllergens && <EditAllergens product={item} />}
        <EditImage
          entity={item}
          size={{ width: 1000, height: 600 }}
          addToEntity="item"
        />
      </IonContent>
    )
  );
};

export default withRouter(ItemDetail);
