import { FC } from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.cards}>{children}</div>
    </div>
  );
};
