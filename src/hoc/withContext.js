import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {/* eslint-disable-next-line */}
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
