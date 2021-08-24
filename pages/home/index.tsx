import { FC, useState } from 'react';
import Content from '@/components/Content';
import PanelFullWidth from '@/components/PanelFullWidth'
import PanelVerticle from '@/components/PanelVerticle';
import InputBox from '@/components/InputBox';
import styles from './home.module.scss'
import IconChip from '@/components/IconChip';
import IconChipInput from '@/components/IconChipInput';
import PopUp from '@/components/PopUp';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';

const routes: string[] = [];

const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div>
                <Content>
                    <SideNav darkMode={darkMode}></SideNav>
                    <PopUp></PopUp>

                    <section className={styles.panelOne}>
                        <PanelFullWidth>
                            <InputBox />
                            <span className={styles.chips}>
                                <IconChip title={"Token Name"} value={"10000"} />
                                <IconChip title={"Token Supply"} value={"10000"} />
                                <IconChip title={"Initial release date"} value={"10000"} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelTwo}>
                        <PanelFullWidth>
                            <span className={styles.chips}>
                                <IconChipInput title={"Presale token per BNB rate"} value={"1200"} />
                                <IconChipInput title={"PCS tokens per BNB rate"} value={"500"} />
                                <IconChipInput title={"Percent towards liquidity"} value={"50" + '%'} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelThree}>
                        <PanelVerticle>
                            <IconChipInput title={"Softcap"} value={"1200"} />
                            <IconChipInput title={"HardCap"} value={"1200"} />
                        </PanelVerticle>
                        <PanelVerticle>
                            <IconChipInput title={"Min Contribution"} value={"1200"} />
                            <IconChipInput title={"Max Contribution"} value={"1200"} />
                        </PanelVerticle>
                        <PanelVerticle>
                            <IconChipInput title={"Start at"} value={"1200"} />
                            <IconChipInput title={"End at"} value={"1200"} />
                        </PanelVerticle>
                    </section>

                </Content>
            </div>
        </>
    );
};

export default Home;