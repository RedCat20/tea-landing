import React, {FC} from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
let cx = classNames.bind(styles);

interface Props {
    type?: string;
    text?: string;
    width?: number | string;
}

const Button:FC<Props> = ({type = 'success', text, width = 'auto'}) => {
    return (
        <button style={{width: width}} className={cx('button', type)}>
            {text || 'Add to cart'}
        </button>
    );
}

export default Button