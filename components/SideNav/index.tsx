import React, { FC } from 'react';
import styles from './sideNav.module.scss'
import assets from '@/assets'

interface Props {
    darkMode: boolean
}

const index: FC<Props> = ({ darkMode }) => {

    return (
        <div className={styles.sideNav}>
            <span className={styles.entry}>
                <img src={!darkMode ? assets.navIcon1 : assets.navIcon1N} alt="" />
                <p>Create Presale</p>
            </span>
            <span className={styles.entry}>
                <img src={!darkMode ? assets.navIcon2 : assets.navIcon2N} alt="" />
                <p>Manage Presale</p>
            </span>
            <span className={styles.entry}>
                <img src={!darkMode ? assets.navIcon3 : assets.navIcon3N} alt="" />
                <p>List Presale</p>
            </span>
        </div>
    );
};

export default index;