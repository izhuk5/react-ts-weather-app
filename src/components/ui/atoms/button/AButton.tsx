import React from 'react';
import styles from './button.module.scss';

interface AButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const AButton: React.FC<AButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
