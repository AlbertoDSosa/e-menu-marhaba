import React, { useState } from 'react';
import { Product, Price } from 'definitions/models';

import { IonLabel, IonItem, IonIcon, IonInput } from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';
import { useMutation } from '../../../../hooks/useMutation';

interface PriceInputProps {
  product: Product;
}

const PriceInput: React.FC<PriceInputProps> = ({ product }) => {
  const { price } = product;
  const { mutate: updatePrice } = useMutation({
    resource: 'items',
    action: 'update'
  });
  const [showPriceInput, setShowPriceInput] = useState(false);
  const [priceValue, setPriceValue] = useState<string>(price.amount);

  const doUpdatePrice = (newPrice: Price) => {
    updatePrice({
      field: 'price',
      entity: 'item',
      payload: { id: product.id, price: newPrice }
    });

    setShowPriceInput(!showPriceInput);
  };

  return (
    <IonItem>
      {!showPriceInput ? (
        <>
          <IonLabel>{`Precio: ${priceValue} €`}</IonLabel>
          <IonIcon
            icon={createOutline}
            size="large"
            color="dark"
            onClick={() => setShowPriceInput(!showPriceInput)}
            slot="end"
          />
        </>
      ) : (
        <>
          <IonLabel>Precio: </IonLabel>
          <IonInput
            value={priceValue}
            onIonInput={(e) => {
              setPriceValue(e.detail.value || '');
            }}
          />
          <IonIcon
            icon={closeCircleOutline}
            size="large"
            color="dark"
            onClick={() => {
              setPriceValue(price.amount);
              setShowPriceInput(!showPriceInput);
            }}
          />
          <IonIcon
            icon={saveOutline}
            size="large"
            color="dark"
            onClick={(e) => doUpdatePrice({ amount: priceValue })}
          />
        </>
      )}
    </IonItem>
  );
};

export default PriceInput;
