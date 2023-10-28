import React, { FC, MouseEvent } from 'react';
import styles from './modal.module.scss';
import { AButton, AIcon } from '../..';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
  title: string;
}

export const AModal: FC<ModalProps> = ({ children, isOpen, onClose, onConfirm, title }) => {
  const handleClose = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalWrapper}>
            <div className={styles.modalInner}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <AIcon className={styles.modalClose} onClick={handleClose} name="close-line" />
              </div>
              <div className={styles.modalBody}>{children}</div>
              <div className={styles.modalFooter}>
                <AButton variant="bordered" onClick={handleClose}>
                  Cancel
                </AButton>
                <AButton onClick={handleConfirm}>Confirm</AButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
