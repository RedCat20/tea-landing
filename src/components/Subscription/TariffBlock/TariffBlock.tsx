import React, {FC} from 'react';

import classNames from 'classnames/bind';
import styles from './TariffBlock.module.scss';
import Button from "../../general/Button/Button";
let cx = classNames.bind(styles);

interface Props {
    topic: 'dark' | 'light';
}

const TariffBlock:FC<Props> = ({topic}) => {
    return (
        <div className={cx('block', 'section_classic', {'dark': topic === 'dark'})}>
            <div className={styles.title}>Standard</div>
            <div className={styles.subtitle}>monthly subscription</div>
            <div className={styles.price}>$59,99</div>
            <ul>
                <li>Thermo mug</li>
                <li>3 chocolate bars</li>
                <li>Decorative bonsai</li>
                <li>Board game “Chai”</li>
                <li>Dried fruit packaging</li>
                <li>Tea set for 4 people</li>
                <li>3 packs of tea of 140 g</li>
                <li>Set of 5 flavors of craft honey</li>
                <li>A set of all the flavors of our store's tea, 4 pieces each</li>
            </ul>

            <Button type={topic === 'light' ? 'success' : 'light'} text="Subscribe"/>
        </div>
    );
};

export default TariffBlock;