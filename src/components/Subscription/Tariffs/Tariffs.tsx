import React from 'react';

import classNames from 'classnames/bind';
import styles from './Tariffs.module.scss';
import TariffBlock from "../TariffBlock/TariffBlock";
let cx = classNames.bind(styles);

const Tariffs = () => {
    return (
        <div className={cx('tariffs', 'section_classic')}>
            {new Array(3).fill(undefined).map((item, idx) => (
                <TariffBlock key={idx} topic={idx !== 2 ? 'light' : 'dark'} />
            ))}
        </div>
    );
};

export default Tariffs;