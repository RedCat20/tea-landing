import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import caps from '../../assets/images/cups.jpg';

import classNames from 'classnames/bind';
import styles from './About.module.scss';

let cx = classNames.bind(styles);

const About:FC = () => {
    return (
        <div className={cx('about')}>

            <div className={styles.aboutImage} style={{background: `url('${caps}')`, backgroundSize: 'cover'}}></div>

            <div className={styles.aboutInfo}>

                <div className={styles.aboutTitle}>
                    About us
                </div>
                <div className={styles.aboutText}>
                    Most consumers are accustomed
                    to distinguish teas mainly by the
                    region of growth: Indian, Ceylon, Georgian, Krasnodar, etc., considering
                    the geographical feature as the main one for a particular type of tea. Many people think that in each of these geographical areas grows a botanically different, special type of tea bush.
                    This opinion is erroneous.
                </div>
                <div className={styles.aboutText}>
                    The only botanically unique type
                    of tea plant in its three varieties
                    is capable of producing, under various factory treatments, all the enormous variety of ready – made teas that humanity now knows – thousands
                    of commercial varieties.
                </div>

                <Link to="/" className={styles.aboutLink}>
                    What people think of us
                </Link>

            </div>

        </div>
    );
}

export default About