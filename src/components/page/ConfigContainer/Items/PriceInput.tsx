import React, { useState } from 'react';
import { Product, Price } from 'definitions/models';

import { IonLabel, IonItem, IonIcon, IonInput } from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';

// import { useData } from '../../../../contexts/DataContext';

interface PriceInputProps {
  product: Product;
}

const PriceInput: React.FC<PriceInputProps> = ({ product }) => {
  const { price } = product;

  const [showPriceInput, setShowPriceInput] = useState(false);
  const [priceValue, setPriceValue] = useState<string>(price.amount);

  const updatePrice = (price: Price) => {
    // update({
    //   field: 'price',
    //   entity: 'item',
    //   payload: { id: product.id, price }
    // });
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
            onIonChange={(e) => setPriceValue(e.detail.value || '')}
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
            onClick={() => updatePrice({ amount: priceValue })}
          />
        </>
      )}
    </IonItem>
  );
};

export default PriceInput;
