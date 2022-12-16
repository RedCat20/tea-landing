import React, {FC} from 'react';

import leaf from '../../../assets/images/leaf.jpg';
import herb from '../../../assets/images/herb.jpg';

import classNames from 'classnames/bind';
import styles from './Quote.module.scss';

let cx = classNames.bind(styles);

const Quote:FC = () => {
    return (
        <div className={cx('quote')}>

            <div className={styles.quoteBlock} style={{background: `url('${leaf}')`, backgroundSize: 'cover', backgroundPosition: 'center center'}}></div>

            <div className={styles.quoteBlock} style={{background: '#2B3E00', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                <div className={styles.quoteText}>
                    Tea elevates the taste and helps to
                    achieve the refinement of the will.“
                </div>
            </div>

            <div className={styles.quoteBlock}  style={{background: `url('${herb}')`, backgroundSize: 'cover', backgroundPosition: 'center center'}}></div>

        </div>
    );
}

export default Quote