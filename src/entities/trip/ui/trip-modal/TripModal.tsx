import { FC } from 'react';
import { AModal } from '@/components/ui';

interface TripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TripModal: FC<TripModalProps> = ({ isOpen, onClose }) => {
  return (
    <AModal isOpen={isOpen} onClose={onClose}>
      <div>123</div>
    </AModal>
  );
};
