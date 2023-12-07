import React, { useState } from 'react';

import {
  Product,
  Price,
  Variants,
  ItemVariant,
  DisplayInfo
} from 'definitions/models';

import { IonLabel, IonItem, IonIcon, IonInput } from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';

import { useData } from '../../../../contexts/DataContext';

interface VariantsPriceInputProps {
  product: Product;
}

const VariantsPriceInput: React.FC<VariantsPriceInputProps> = ({ product }) => {
  const { update, get } = useData();
  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const { itemVariantPrices } = product;
  const variants: Variants = get({ collection: 'variants', from: 'system' })
    .dictionary[product.variants!];

  const itemVariantsArray = Object.values(variants.itemVariants);
  const lang = generalInfo.baseLanguage;

  return (
    <>
      {itemVariantsArray.map((variant: ItemVariant) => {
        const price: Price = itemVariantPrices![variant.id];
        const info: DisplayInfo = variant.displayInfo[lang];
        const [showVariantPriceInput, setShowVariantPriceInput] =
          useState(false);
        const [variantPriceValue, setVariantPriceValue] = useState<string>(
          price.amount
        );

        const updateVariantPrice = (price: Price) => {
          update({
            field: 'itemVariantPrice',
            entity: 'item',
            payload: { itemId: product.id, variantId: variant.id, price }
          });
          setShowVariantPriceInput(!showVariantPriceInput);
        };

        return (
          <IonItem key={variant.id}>
            {!showVariantPriceInput ? (
              <>
                <IonLabel>{`Precio de ${info.title}: ${variantPriceValue} ${
                  variantPriceValue ? '€' : ''
                }`}</IonLabel>
                <IonIcon
                  icon={createOutline}
                  size="large"
                  color="dark"
                  onClick={() =>
                    setShowVariantPriceInput(!showVariantPriceInput)
                  }
                  slot="end"
                />
              </>
            ) : (
              <>
                <IonLabel> {`Precio de ${info.title}:`}</IonLabel>
                <IonInput
                  value={variantPriceValue}
                  onIonChange={(e) =>
                    setVariantPriceValue(e.detail.value || '')
                  }
                />
                <IonIcon
                  icon={closeCircleOutline}
                  size="large"
                  color="dark"
                  onClick={() => {
                    setVariantPriceValue(price.amount);
                    setShowVariantPriceInput(!showVariantPriceInput);
                  }}
                />
                <IonIcon
                  icon={saveOutline}
                  size="large"
                  color="dark"
                  onClick={() =>
                    updateVariantPrice({ amount: variantPriceValue })
                  }
                />
              </>
            )}
          </IonItem>
        );
      })}
    </>
  );
};

export default VariantsPriceInput;
