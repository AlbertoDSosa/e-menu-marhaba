import React, { useRef } from 'react';
import { IonButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
interface ImageSelectProps {
  width: number;
  height: number;
  setImage(image: HTMLImageElement): void;
  setWrongImage(wrongImage: boolean): void;
}

const ImageSelect: React.FC<ImageSelectProps> = ({
  width,
  height,
  setImage,
  setWrongImage
}) => {
  const fileInput = useRef<HTMLInputElement>({} as HTMLInputElement);

  const onSelectFile = () => {
    const files = fileInput.current?.files as FileList;
    const file = files[0];
    const reader = new FileReader();

    reader.onload = function (evt) {
      const imageResult = evt.target?.result as string;
      const image = new Image();

      image.src = imageResult;
      image.alt = file.name;

      image.decode().then(() => {
        const imgHeight = image.naturalHeight === height;
        const imgWidth = image.naturalWidth === width;

        if (!imgHeight && !imgWidth) {
          setWrongImage(true);
        } else {
          setWrongImage(false);
        }
      });

      setImage(image);

    };
    reader.readAsDataURL(file);
  };

  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        <IonCol size="3">
          <div className="ion-text-center">
            <input
              ref={fileInput}
              hidden
              name="avatar"
              type="file"
              accept="image/png, image/jpeg"
              onChange={onSelectFile}
            />
            <IonButton
              color="primary"
              onClick={() => fileInput.current.click()}
            >
              Elegir Imagen
            </IonButton>
          </div>
          <IonText>
            <p className="ion-text-center">{`La imagen cargada debe tener unas medidas de ${width} x ${height} píxeles`}</p>
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ImageSelect;
