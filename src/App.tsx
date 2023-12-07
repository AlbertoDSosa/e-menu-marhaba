import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Screensaver from './pages/Screensaver';
import MenuPage from './pages/Menu';
import Menus from './pages/Menus';
import Flags from './pages/Flags';
import Config from './pages/Config';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';

/* Swipe CSS */
import 'swiper/css';
import 'swiper/css/bundle';
import '@ionic/react/css/ionic-swiper.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/menus/:lang/:menuId">
            <Menus />
          </Route>
          <Route exact path="/page/:lang/:pageId" component={MenuPage} />
          <Route exact path="/screensaver">
            <Screensaver />
          </Route>
          <Route exact path="/flags">
            <Flags />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/config/categories">
            <Config />
          </Route>
          <Route exact path="/config/screensaver">
            <Config />
          </Route>
          <Route path="/config/categories/:key">
            <Config />
          </Route>
          <Route exact path="/config/items">
            <Config />
          </Route>
          <Route path="/config/items/:key">
            <Config />
          </Route>
          <Route exact path="/config/lists">
            <Config />
          </Route>
          <Route path="/config/lists/:key">
            <Config />
          </Route>
          <Route path="/config/listItem/:key">
            <Config />
          </Route>
          <Route exact path="/config/menus">
            <Config />
          </Route>
          <Route path="/config/menus/:key">
            <Config />
          </Route>
          <Route path="/config/pageMenuItem/:key">
            <Config />
          </Route>
          <Route path="/config/slides/:key">
            <Config />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
