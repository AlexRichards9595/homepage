import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.css';

const Landing = () => (
  <div className={styles.Landing} data-testid="Landing">
      <h1>My Name is Alex Richards</h1>
      <h3>and I like to travel more than work</h3>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
