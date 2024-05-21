import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText
} from '@ionic/react';

import { closeCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';

import styles from './styles.module.css';
import ImageSelect from 'components/ui/ImageSelect';
import { ImageSaveParams } from 'definitions/editions';

interface AddImageModalProps {
  showModal: boolean;
  setShowModal(showModal: boolean): void;
  size: { width: number; height: number };
  doSaveImage(imageSaveParams: ImageSaveParams): void;
  imageType: string;
}

const AddImageModal: React.FC<AddImageModalProps> = ({
  size,
  showModal,
  setShowModal,
  doSaveImage,
  imageType
}) => {
  const [image, setImage] = useState<HTMLImageElement>({} as HTMLImageElement);
  const [wrongImage, setWrongImage] = useState<boolean>(false);

  return (
    <IonModal
      isOpen={showModal}
      className={styles.modal}
      backdropDismiss={false}
    >
      <IonList>
        <IonItem className={styles.imageItem}>
          {image.src ? (
            <IonGrid style={{ padding: '0px' }}>
              <IonRow
                className="ion-justify-content-center"
                style={{ padding: '0px' }}
              >
                <IonCol
                  style={{
                    maxHeight: '820px',
                    position: 'relative',
                    padding: '0px'
                  }}
                  size="6"
                >
                  <img
                    src={image.src}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      border: wrongImage
                        ? '2px red solid'
                        : '2px lightgreen solid'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    {wrongImage ? (
                      <IonGrid>
                        <IonRow
                          className="ion-justify-content-center"
                          style={{ backgroundColor: 'rgb(255, 255, 255, 90%)' }}
                        >
                          <IonIcon
                            size="large"
                            icon={closeCircleOutline}
                            color="danger"
                          />
                          <IonText
                            className="ion-align-self-center"
                            color="danger"
                          >
                            <strong
                              style={{
                                display: 'inline-block',
                                verticalAlign: 'middle'
                              }}
                            >
                              Las medidas de la imagen no corresponden
                            </strong>
                          </IonText>
                        </IonRow>
                        <IonRow
                          style={{ backgroundColor: 'rgb(255, 255, 255, 90%)' }}
                        >
                          <ImageSelect
                            width={size.width}
                            height={size.height}
                            setWrongImage={setWrongImage}
                            setImage={setImage}
                          />
                        </IonRow>
                      </IonGrid>
                    ) : (
                      <IonIcon
                        size="large"
                        icon={checkmarkCircleOutline}
                        color="success"
                        className="ion-padding"
                      />
                    )}
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          ) : (
            <ImageSelect
              width={size.width}
              height={size.height}
              setWrongImage={setWrongImage}
              setImage={setImage}
            />
          )}
        </IonItem>
        <IonItem>
          <IonButton
            expand="block"
            slot="end"
            size="default"
            onClick={() => {
              setShowModal(false);
              setImage({} as HTMLImageElement);
            }}
          >
            Cancelar
          </IonButton>
          <IonButton
            slot="end"
            size="default"
            expand="block"
            onClick={() => {
              if(imageType === 'item') {
                const canvas = document.createElement('canvas');
                const title = image.alt.split('.')[0];
                const ctx = canvas.getContext("2d");

                canvas.width = 500;
                canvas.height = 300;

                ctx?.drawImage(image, 0, 0, 500, 300);

                doSaveImage({
                  full: {
                    src: image.src,
                    title
                  },
                  thumbnail: {
                    src: canvas.toDataURL(),
                    title
                  }
                });
              } else {
                doSaveImage({
                  full: {
                    src: image.src,
                    title: image.alt
                  },
                  thumbnail: {
                    src: '',
                    title: image.alt
                  }
                });
              }

              setShowModal(false);
              setImage({} as HTMLImageElement);
            }}
            disabled={wrongImage || !image.src}
          >
            Guardar
          </IonButton>
        </IonItem>
      </IonList>
    </IonModal>
  );
};

export default AddImageModal;
