import React from 'react';
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, heartOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonList>
          <IonItem button onClick={() => navigateTo('/home')}>
            <IonIcon icon={homeOutline} slot="start" />
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button onClick={() => navigateTo('/favorites')}>
            <IonIcon icon={heartOutline} slot="start" />
            <IonLabel>Favorites</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
