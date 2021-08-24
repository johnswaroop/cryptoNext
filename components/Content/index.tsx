import { FC, ReactNode } from 'react';
import styles from './content.module.scss'

interface Props {
    children?: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default Content;