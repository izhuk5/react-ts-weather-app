import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface AButtonProps {
  color?: 'primary';
  variant?: 'solid' | 'bordered';
  onClick: (event: MouseEvent) => void;
  children: React.ReactNode;
}

export const AButton: React.FC<AButtonProps> = ({
  color = 'primary',
  variant = 'solid',
  onClick,
  children,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles[`button--${color}`]]: color,
        [styles[`button--${variant}`]]: variant,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
