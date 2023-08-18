import React from 'react';
import styles from './button.module.scss';

interface AButtonProps {
  onClick: () => void;
  text: string;
}

export const AButton: React.FC<AButtonProps> = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
