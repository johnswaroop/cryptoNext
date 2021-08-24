import { FC, useState } from 'react';
import assets from '../../assets';
import styles from './iconChipInput.module.scss'

interface Props {
    icon?: string,
    title: string,
    value: string,
}

const IconChipInput: FC<Props> = ({ title, value, icon }) => {

    const [inFocus, setInFocus] = useState<boolean>(false);

    const handleFocus = () => {
        setInFocus(f => !f);
    }

    return (
        <span className={styles.iconChip}>
            <span className={styles.iconContainer}>
                <img src={icon ? icon : assets.bnbIcon} />
            </span>
            <span className={inFocus ? styles.textContainerFocus : styles.textContainer} >
                <p className={styles.title}>{title}</p>
                <span className={styles.input}>
                    <input type="text" onFocus={handleFocus} onBlur={handleFocus} />
                    <span className={inFocus ? styles.customBorderFocus : styles.customBorder}>
                        <span></span>
                    </span>
                </span>
            </span>

        </span>
    );
};

export default IconChipInput;