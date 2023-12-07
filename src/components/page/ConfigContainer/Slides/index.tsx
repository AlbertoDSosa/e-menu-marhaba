import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface SlidesProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ConfigSlides: React.FC<SlidesProps> = () => {
  return <div>Slides</div>;
};

export default withRouter(ConfigSlides);
