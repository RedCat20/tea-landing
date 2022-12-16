import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import teapot from '../../../assets/images/teapot.svg';
import basket from '../../../assets/images/basket.svg';
import search from '../../../assets/images/search.svg';
import hamburger from '../../../assets/images/header/hamburger.svg';

import twitter from '../../../assets/images/icons/twitter.svg';
import facebook from '../../../assets/images/icons/facebook.svg';
import instagram from '../../../assets/images/icons/instagram.svg';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Socials from "../../general/Socials/Socials";

let cx = classNames.bind(styles);

const LINKS = [
    {
        id: 0,
        title: 'Varieties of tea',
        path: '/',
    },
    {
        id: 1,
        title: 'Accessories',
        path: '/',
    },
    {
        id: 2,
        title: 'About',
        path: '/',
    },
    {
        id: 3,
        title: 'Delivery',
        path: '/',
    }
];

const Header:FC = () => {
    return (
        <div className={cx('headerRoot')}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img className={styles.logoImg} src={teapot} alt="Teapot"/>
                    </Link>
                </div>
                <div className={styles.links}>
                    {LINKS.map((item) =>
                        (<div key={item.id} className={styles.linksItem}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </div>)
                    )}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.icons}>
                    <Socials/>
                </div>
                <div className={styles.search}>
                    <img className={styles.searchIcon} src={search} alt="Search"/>
                    <input className={styles.searchInput} placeholder={window.innerWidth > 1199 ? "Search..." : ""}/>
                </div>
                <div className={styles.basket}>
                    <Link to="/">
                        <button className={styles.basketBtn}>
                            <img className={styles.logoImg} src={basket} alt="Teapot"/>
                        </button>
                    </Link>
                </div>
                <div className={styles.hamburger}>
                    <button className={styles.hamburgerBtn}>
                        <img className={styles.hamburgerImg} src={hamburger} alt="Teapot"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header