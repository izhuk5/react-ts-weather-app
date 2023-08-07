import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <button onClick={onClick} className={color}>
      {children}
    </button>
  );
};
