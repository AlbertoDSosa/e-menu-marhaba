import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import ConfigContainer from '../../components/page/ConfigContainer';
import ConfigGeneralInfo from '../../components/page/ConfigContainer/GeneralInfo';
import ConfigCategories from '../../components/page/ConfigContainer/Categories';
import CategoryDetail from '../../components/page/ConfigContainer/Categories/Detail';
import ConfigItems from '../../components/page/ConfigContainer/Items';
import ItemDetail from '../../components/page/ConfigContainer/Items/Detail';
import ConfigLists from '../../components/page/ConfigContainer/Lists';
import ConfigListItemDetail from '../../components/page/ConfigContainer/Lists/ItemDetail';
import ConfigPageMenuItemDetail from '../../components/page/ConfigContainer/Menus/ItemDetail';
import ListDetail from '../../components/page/ConfigContainer/Lists/Detail';
import ConfigMenus from '../../components/page/ConfigContainer/Menus';
import MenuDetail from '../../components/page/ConfigContainer/Menus/Detail';
import ScreensaverConf from '../../components/page/ConfigContainer/ScreensaverConfig';
import ConfigSlideDetail from '../../components/page/ConfigContainer/Slides/Detail';

const Config: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/config">
        <ConfigContainer title="Información General">
          <ConfigGeneralInfo />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/categories">
        <ConfigContainer title="Categorías">
          <ConfigCategories />
        </ConfigContainer>
      </Route>
      <Route path="/config/categories/:key">
        <ConfigContainer collection="categories" title="Detalle de Categoría">
          <CategoryDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/items">
        <ConfigContainer title="Artículos">
          <ConfigItems />
        </ConfigContainer>
      </Route>
      <Route path="/config/items/:key">
        <ConfigContainer collection="items" title="Detalle de Artículo">
          <ItemDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/lists">
        <ConfigContainer title="Listas">
          <ConfigLists />
        </ConfigContainer>
      </Route>
      <Route path="/config/lists/:key">
        <ConfigContainer collection="lists" title="Detalle de Lista">
          <ListDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/listItem/:key">
        <ConfigContainer title="Detalle de Artículo de Lista">
          <ConfigListItemDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/menus">
        <ConfigContainer title="Menus">
          <ConfigMenus />
        </ConfigContainer>
      </Route>
      <Route path="/config/menus/:key">
        <ConfigContainer collection="pageMenus" title="Detalle de Menus">
          <MenuDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/pageMenuItem/:key">
        <ConfigContainer title="Detalle de Artículo de Menu">
          <ConfigPageMenuItemDetail />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/screensaver">
        <ConfigContainer title="Salvapantallas">
          <ScreensaverConf />
        </ConfigContainer>
      </Route>
      <Route exact path="/config/slides/:key">
        <ConfigContainer title="Detalle de Diapositiva">
          <ConfigSlideDetail />
        </ConfigContainer>
      </Route>
    </IonRouterOutlet>
  );
};

export default Config;
