import React, {FC} from 'react';

import styles from './Pricer.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Price:FC = () => {

    return (
        <div className={styles.price}>
            <div className={styles.amount}>
                <button className={cx('countBtn', {'decrease': true})}>-</button>
                <div className={styles.count}>15</div>
                <button className={cx('countBtn', {'increase': true})}>+</button>
            </div>
            <div>
                <div className={styles.count}>$ 150</div>
            </div>
        </div>
    );
}

export default Price