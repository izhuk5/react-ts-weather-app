import React, { FC } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AModal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      {children}
    </ReactModal>
  );
};
