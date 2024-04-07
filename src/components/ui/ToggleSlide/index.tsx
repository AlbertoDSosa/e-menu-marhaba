import React, { useState } from 'react';

import { IonToggle } from '@ionic/react';

interface ToggleSlideProps {
  variables: any;
  title: string;
  show: boolean;
}

import { useMutation } from '../../../hooks/useMutation';

const ToggleSlide: React.FC<ToggleSlideProps> = ({
  title,
  variables,
  show
}) => {
  const { resource, action, args } = variables;
  const { mutate } = useMutation({ resource, action });
  const [toggleShow, setToggleShow] = useState<boolean>(show);

  return (
    <IonToggle
      color="dark"
      justify="space-between"
      checked={toggleShow}
      onIonChange={() => {
        setToggleShow(!toggleShow);
        mutate(args);
      }}
    >
      Mostrar {title}
    </IonToggle>
  );
};

export default ToggleSlide;
