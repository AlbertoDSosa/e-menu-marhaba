import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonLoading
  // IonToggle
} from '@ionic/react';

import { useQuery } from '../../../../hooks/useQuery';

// import EditDisplayInfo from '../EditDisplayInfo';
import { Category, Item } from 'definitions/models';
import { Key } from 'definitions/dataContext';

interface CategoryDetailPageProps
  extends RouteComponentProps<{
    key: Key;
  }> {}

const CategoryDetail: React.FC<CategoryDetailPageProps> = ({ match }) => {
  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: categories, isLoading: categoriesIsLoading } = useQuery({
    key: 'categories'
  });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (itemsIsLoading || categoriesIsLoading || generalInfoIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const lang = generalInfo.baseLanguage;
  const category: Category = categories[match.params.key];

  return (
    <IonContent>
      {/* <EditDisplayInfo
        entityName="category"
        entity={category}
        key="categories"
      /> */}
      {/* <IonList>
        <IonListHeader color="dark">
          <h4>Otra Información</h4>
        </IonListHeader>
        <IonItem>
          <IonLabel>Activa</IonLabel>
          <IonToggle
            color="dark"
            checked={category.active}
            onIonChange={() => {
              setActive('category', category.id);
            }}
          />
        </IonItem>
      </IonList> */}
      <IonList>
        <IonListHeader color="dark">
          <h4>Artículos de la Categoría</h4>
        </IonListHeader>
        {category.items?.map((itemId: string) => {
          const item: Item = items[itemId];
          const info = item?.displayInfo[lang];
          return (
            <IonItem key={itemId} routerLink={`/config/items/${itemId}`}>
              <IonLabel>{info?.title}</IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </IonContent>
  );
};

export default withRouter(CategoryDetail);
