import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonMenu, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect } from 'react';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import Home from './pages/Home';
import Menu from './components/Menu';
import { setupIonicReact } from '@ionic/react';
/* Keep awake */
import { KeepAwake } from '@capacitor-community/keep-awake';

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

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    // Lock the screen orientation to landscape mode when the component mounts
    ScreenOrientation.lock({ orientation: 'landscape' });
    // Keep the screen awake when the app is active
    KeepAwake.keepAwake();
    return () => {
      // Allow the screen to sleep when the app is closed
      KeepAwake.allowSleep();
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main">
          <Menu />
        </IonMenu>
        <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
