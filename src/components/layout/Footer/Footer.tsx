import React, {FC} from 'react';
import logo from '../../../assets/images/footer/logo.svg';

import twitter from '../../../assets/images/icons/twitter.svg';
import facebook from '../../../assets/images/icons/facebook.svg';
import instagram from '../../../assets/images/icons/instagram.svg';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Socials from "../../general/Socials/Socials";
import {Link} from "react-router-dom";
let cx = classNames.bind(styles);

interface Props {
    isMobile?: boolean;
}

const Footer: FC<Props> = ({isMobile}) => {
    return (
        <div className={cx(styles.footer, 'section_classic')}>
            <div className={styles.main}>
                <img className={styles.mainLogo} src={logo} alt="Logo"/>
                <div className={styles.mainLink}>
                    <Link to="">Privacy Policy</Link>
                </div>
                <div className={styles.mainLink}>
                    <Link to="">Cookie File Policy</Link>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.linksBlock}>
                    <Link to="">Sort of tea</Link>
                    <Link to="">Herb</Link>
                    <Link to="">Berry</Link>
                    <Link to="">Fruit</Link>
                </div>
                <div className={styles.linksBlock}>
                    <Link to="">Accessories</Link>
                    <Link to="">Teapots</Link>
                    <Link to="">Mugs</Link>
                    <Link to="">Tea kettles</Link>
                    <Link to="">Gift sets</Link>
                </div>
                <div className={styles.linksBlock}>
                    <Link to="">About</Link>
                </div>
                <div className={styles.linksBlock}>
                    <Link to="">Delivery</Link>
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactsPhone}>
                    <Link to="">+48 684 673 694</Link>
                </div>
                <div className={styles.contactsEmail}>
                    <Link to="">tea@gmail.com</Link>
                </div>
                <Socials/>
            </div>
        </div>
    );
};

export default Footer;