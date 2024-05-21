import React, { useState } from 'react';

import {
  Product,
  Price,
  // Variants,
  // ItemVariant,
  DisplayInfo
} from 'definitions/models';

import { IonLabel, IonItem, IonIcon, IonInput, IonLoading } from '@ionic/react';

import { createOutline, saveOutline, closeCircleOutline } from 'ionicons/icons';

import { useQuery } from 'hooks/useQuery';
import { useMutation } from 'hooks/useMutation';

interface VariantsPriceInputProps {
  product: Product;
}

const VariantsPriceInput: React.FC<VariantsPriceInputProps> = ({ product }) => {
  const { mutate: updateVariantPrice } = useMutation({
    resource: 'items',
    action: 'update'
  });
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: dictionaryVariants, isLoading: variantsIsLoading } =
    useQuery({
      key: 'variants'
    });

  if (generalInfoIsLoading || variantsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const { itemVariantPrices } = product;
  const itemVariantsArray = Object.values(
    dictionaryVariants[product.variants!].itemVariants
  );
  const lang = generalInfo.baseLanguage;

  return (
    <>
      {itemVariantsArray.map((variant: any) => {
        const price: Price = itemVariantPrices![variant.id];
        const info: DisplayInfo = variant.displayInfo[lang];
        const [showVariantPriceInput, setShowVariantPriceInput] =
          useState(false);
        const [variantPriceValue, setVariantPriceValue] = useState<string>(
          price.amount
        );

        const doUpdateVariantPrice = (newPrice: Price) => {
          updateVariantPrice({
            field: 'price',
            entity: 'item',
            payload: { id: product.id, price: newPrice }
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
                  onIonInput={(e) => setVariantPriceValue(e.detail.value || '')}
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
                    doUpdateVariantPrice({ amount: variantPriceValue })
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
