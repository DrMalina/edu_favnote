import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Tweets = ({ tweets }) => (
  <GridTemplate>
    {tweets.map(({ title, content, twitterName, created, id }) => (
      <Card
        id={id}
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};

Tweets.defaultProps = {
  tweets: [],
};

const mapStateToProps = ({ tweets }) => ({ tweets });

export default connect(mapStateToProps)(Tweets);
