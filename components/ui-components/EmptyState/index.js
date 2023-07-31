import React from 'react';
import styles from './emptyState.module.css';

const EmptyState = ({ message }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.message}>{message}</h2>
    </div>
  );
};

export default EmptyState;
