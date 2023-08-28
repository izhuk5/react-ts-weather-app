import { FC } from 'react';
import styles from './base-layout.module.scss';
import { HomeInfo } from '@/pages/home/ui/home-info/HomeInfo';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.info}>
        <HomeInfo city="Berlin" />
      </div>
    </div>
  );
};
