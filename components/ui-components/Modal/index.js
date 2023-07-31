import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
