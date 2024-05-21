import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useQuery } from 'hooks/useQuery';

const ConfigCategories: React.FC = () => {
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { collection: categories, isLoading: categoriesIsLoading } = useQuery({
    key: 'categories'
  });

  if (generalInfoIsLoading || categoriesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const lang = generalInfo.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {categories?.map((category: any) => {
          return (
            <IonItem
              key={category?.id}
              routerLink={`/config/categories/${category?.id}`}
            >
              <IonLabel>
                <h3>{category.displayInfo[lang].title}</h3>
                <p>{category.displayInfo[lang].description}</p>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigCategories;
