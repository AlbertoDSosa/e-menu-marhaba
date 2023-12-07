import BlackboardList from './BlackboardList';

export interface TemplatesProps {
  modal: any;
  lang: string;
}

type TemplatesType = {
  [key: string]: React.FC<TemplatesProps>;
};

const templates: TemplatesType = {
  'template->modal->blackboard-list': BlackboardList
};

const Templates: React.FC<TemplatesProps> = ({ modal, lang }) => {
  const Template: React.FC<TemplatesProps> = templates[modal.template];
  return <Template modal={modal} lang={lang} />;
};

export default Templates;
