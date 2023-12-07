import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react';

import { useData } from '../../../../contexts/DataContext';

const ConfigCategories: React.FC = () => {
  const { get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const generalInfo = get({ collection: 'generalInfo', from: 'state' });
  const categories = get({ collection: 'categories', from: 'state' });
  const language = generalInfo.dictionary.baseLanguage;

  return (
    <IonContent>
      <IonList>
        {categories.collection.map((category: any) => {
          return (
            <IonItem
              key={category?.id}
              routerLink={`/config/categories/${category?.id}`}
            >
              <IonLabel>
                <h3>{category.displayInfo[language]?.title}</h3>
                <p>{category.displayInfo[language]?.description}</p>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default ConfigCategories;
