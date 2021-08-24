import { FC, useState } from 'react';
import Content from '@/components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import styles from './manage.module.scss'
import assets from '@/assets';

const routes: string[] = [];

interface fieldProps {
    title: string,
    value: string
}

interface cPanelProps {
    title: string,
}
const Field: FC<fieldProps> = ({ title, value }) => {
    return (
        <span className={styles.field}>
            <p className={styles.key}>{title} :</p>
            <h4 className={styles.value}>{value}</h4>
        </span>
    )
}

const CPanel: FC<cPanelProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleExpand = () => {
        setIsExpanded(mode => !mode)
    }

    return (
        <div className={styles.panel4}>
            <span className={styles.panelHead}>
                <img src={assets.success} alt="" />
                <h3 className={styles.panelTitle}>{title}</h3>
                <img className={styles.arrow} src={assets.arrowDown} alt="" onClick={handleExpand} />
            </span>
            {children && isExpanded ? (<span className={styles.panelBody}>
                {children}
            </span>) : null}
        </div>
    )
}


const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div>
                <Content>
                    <SideNav darkMode={darkMode}></SideNav>
                    <div className={styles.manage}>
                        <span className={styles.header}>
                            <h1>Manage your presale</h1>
                        </span>
                        <div className={styles.form}>
                            <div className={styles.manageRowOne}>
                                <div className={styles.panel1}>
                                    <h3 className={styles.panelTitle}>Token Information</h3>
                                    <div className={styles.row}>
                                        <span className={styles.colLeft}>
                                            <Field title={"Name"} value={'Jupiter Coin'} />
                                            <Field title={"Symbol"} value={'JPC'} />
                                        </span>
                                        <span className={styles.colLeft}>
                                            <Field title={"Address"} value={'1234651111'} />
                                            <Field title={"Total Sypply"} value={'Jupiter Coin'} />
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.panel2}>
                                    <h3 className={styles.panelTitle}>Token Information</h3>
                                    <div className={styles.row}>
                                        <span className={styles.colLeft}>
                                            <Field title={"Name"} value={'Jupiter Coin'} />
                                            <Field title={"Symbol"} value={'JPC'} />
                                        </span>
                                        <span className={styles.colLeft}>
                                            <Field title={"Address"} value={'1234651111'} />
                                            <Field title={"Total Sypply"} value={'Jupiter Coin'} />
                                        </span>
                                        <span className={styles.colLeft}>
                                            <Field title={"Address"} value={'1234651111'} />
                                            <Field title={"Total Sypply"} value={'Jupiter Coin'} />
                                        </span>
                                        <span className={styles.colRight}>
                                            <Field title={"Start at"} value={'2/1/2013 7:37:08 AM'} />
                                            <Field title={"End at"} value={'2/1/2013 7:37:08 AM'} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.panel3}>
                                <p className={styles.panelTitle}>Share Presale Link</p>
                                <h3 className={styles.valueLink}>{'https://www.youtube.com/watch?v=bOMksnSaAJ4'}</h3>
                            </div>

                            <CPanel title={'Step 1 - Desposit Tokens'} >
                                <div className={styles.depositToken}>
                                    <button className={styles.btn}>Deposit</button>
                                    <p className={styles.value}>You will need atleast 1000 Tokens in your wallet   :   0x0000000000000000000000000123</p>
                                </div>
                            </CPanel>
                            <CPanel title={'Step 2 - Share Presale Link'} />
                            <CPanel title={'Step 3 - Finalize or Cancel'} />
                            <CPanel title={'Optional - Update Presale Information'} />
                        </div>
                    </div>


                </Content>
            </div>
        </>
    );
};

export default Home;