import React, {FC} from 'react';
import Description from "./Description/Description";
import Tariffs from "./Tariffs/Tariffs";

import classNames from 'classnames/bind';
import styles from './Subscription.module.scss';
let cx = classNames.bind(styles);

interface Props { }

const Subscription:FC<Props> = ({}) => {
    return (
        <>
            <Description/>
            <Tariffs/>
        </>
    );
};

export default Subscription;