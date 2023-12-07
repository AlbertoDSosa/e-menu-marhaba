import Templates from './Templates';

import { ListModal } from 'definitions/models';

interface ModalProps {
  modal: ListModal;
  lang: string;
}

const ModalTemplate: React.FC<ModalProps> = ({ modal, lang }) => {
  return <Templates modal={modal} lang={lang} />;
};

export default ModalTemplate;
