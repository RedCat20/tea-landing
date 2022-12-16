import React from 'react';

import classNames from 'classnames/bind';
import styles from './Description.module.scss';
let cx = classNames.bind(styles);

const Description = () => {
    return (
        <div className={cx('description', 'section_classic')}>
            <div className={styles.info}>
                <h1>Subscribe to delivery</h1>
                <p>
                    99% of our customers subscribe to our products because they save more
                    than 30% of their finances.
                    As a bonus, you will also
                    get a 40% discount for
                    your friend on thesecond product in the store.
                </p>
            </div>
        </div>
    );
};

export default Description;