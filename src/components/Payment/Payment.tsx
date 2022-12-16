import React, {useEffect, useState} from 'react';
import MethodCardItem from "./MethodCardItem/MethodCardItem";
import Button from "../general/Button/Button";

import breakfast from '../../assets/images/payment/breakfast.jpg';

import {PAYMENT_METHODS} from "../../data/payment.data";

import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Checkbox from "../general/Checkbox/Checkbox";
import TextField from "../general/TextField/TextField";
import Method from "./Method/Method";
import leaf1 from "../../assets/images/order/leaf1.svg";
import leaf2 from "../../assets/images/order/leaf2.svg";
import leaf3 from "../../assets/images/order/leaf3.svg";
let cx = classNames.bind(styles);

const PRODUCTS = [
    { id: 0, image: leaf1, weight: 80, price: 10, count: 15},
    { id: 1, image: leaf2, weight: 140, price: 25, count: 0},
]


const Payment = () => {

    const [activeMethod, setActiveMethod] = useState<number>(-1);

    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        if (PAYMENT_METHODS.length > 0) {
            setActiveMethod(0);
        }
    },[]);

    const chooseActiveMethod = (id: number | string) => {
        setActiveMethod( Number(id) );
    }

    return (
        <div className={cx('payment', 'section_classic')}>

            <Method/>

            <div className={cx(styles.info)}>
                <h2 className={cx(styles.title)}>Order information</h2>

                <div className={styles.products}>
                    <img src={breakfast} alt="Breakfast" />
                    <div className={styles.productList}>
                        {PRODUCTS.map((item) => (
                            <div key={item.id} className={styles.product}>
                                <span>${item.price}</span>
                                <span>{item.count}</span>
                                <span>${item.price * item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.fields}>
                    <div className={styles.field}>
                        <div className={cx(styles.price)}>Regular price: $300  </div>
                    </div>
                    <div className={styles.fieldWithLabel}>
                        <div className={cx(styles.price)}>Promo code:</div>
                        <TextField width={98}/>
                    </div>
                    <div className={styles.fieldWithLabel}>
                        <div className={cx(styles.price)}>Discount:</div>
                        <TextField width={98}/>
                    </div>

                </div>

                <h2 className={cx(styles.total)}>Total price: ${300}</h2>
            </div>
        </div>
    );
};

export default Payment;