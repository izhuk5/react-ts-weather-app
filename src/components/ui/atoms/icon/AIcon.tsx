import { FC, MouseEvent } from 'react';

interface AIconProps {
  className?: string;
  onClick?: (event: MouseEvent) => void;
  name: keyof typeof import('remixicon/fonts/remixicon.glyph.json');
}

export const AIcon: FC<AIconProps> = ({ name, className, onClick }) => {
  return <i className={`ri-${name} ${className}`} onClick={onClick} />;
};
