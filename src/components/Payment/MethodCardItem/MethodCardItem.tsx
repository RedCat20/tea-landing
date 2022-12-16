import React, {FC, MouseEventHandler, MouseEvent} from 'react';

import classNames from 'classnames/bind';
import styles from './MethodCardItem.module.scss';
let cx = classNames.bind(styles);

interface Props {
    id: string;
    icon: any;
    title: string;
    chooseActiveMethod: (id: number | string) => void;
    activeMethod: number;
    [propName: string]: any;
}

const Payment:FC<Props> = ( {id, title, icon, activeMethod, chooseActiveMethod }) => {
    return (
        <div className={cx(styles.root, {'active': ( Number(id) === Number(activeMethod)) })}
             onClick={(e: MouseEvent<HTMLDivElement>) => {
                 chooseActiveMethod(id);
             }
        }>
            {/*<img className={styles.image} src={icon} alt={title}/>*/}
            <div className={styles.image}>
                {icon}
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default Payment;