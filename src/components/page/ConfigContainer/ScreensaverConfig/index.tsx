import React from 'react';
import { useData } from '../../../../contexts/DataContext';
import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonLoading
} from '@ionic/react';

import EditScreensaverSlides from './EditScreensaveSlides';
import AddSlide from './AddSlide';

const ScreensaverConfig: React.FC = () => {
  const { get, loading } = useData();

  if (loading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const screensaver = get({ collection: 'screensaver', from: 'state' });
  const timeToShow =
    screensaver.dictionary.selectableTimesToShow[
      screensaver.dictionary.timeToShow
    ];
  const timeToShowInfo = timeToShow.displayInfo['es'];

  const selectableTimesToShowArray = Object.values(
    screensaver.dictionary.selectableTimesToShow
  );

  const onChangeTimeToShow = (e: any) => {
    // console.log(e.detail.value);
  };

  return (
    <IonContent>
      <IonList>
        <IonListHeader>
          <h2>Editar Opciones de Salvapantallas</h2>
        </IonListHeader>
        <IonItem>
          <IonLabel>Duración de inactividad</IonLabel>
          <IonSelect
            value={timeToShow.id}
            placeholder={timeToShowInfo.title}
            onIonChange={onChangeTimeToShow}
          >
            {selectableTimesToShowArray.map((time: any) => {
              const displayInfo = time.displayInfo['es'];

              return (
                <IonSelectOption key={time.id} value={time.id}>
                  {displayInfo.title}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonList>
      <AddSlide />
      <EditScreensaverSlides />
    </IonContent>
  );
};

export default ScreensaverConfig;
