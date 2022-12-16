import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/bg.jpg';

import classNames from 'classnames/bind';
import styles from './Welcome.module.scss';

let cx = classNames.bind(styles);

const Welcome:FC = () => {
    return (
        <div className={cx('welcome')}>

            <div className={styles.welcomeContent}>

                <div className={styles.welcomeTitle}>
                    Tea of {window.innerWidth > 767 && <br/>}
                    Your Soul
                </div>
                <div className={styles.welcomeText}>
                    We take care of each collected leaf of tea that falls into your cup, and we do it with love, because our work is our whole life.
                </div>

                <button className={styles.welcomeBtn}>
                    View our tea
                </button>

            </div>

            <div className={styles.welcomeImage} style={{background: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: '75% 50%'}}>

            </div>
        </div>
    );
}

export default Welcome