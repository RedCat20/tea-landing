import React from 'react';
import Button from "../general/Button/Button";

import leaf1 from '../../assets/images/order/leaf1.svg';
import leaf2 from '../../assets/images/order/leaf2.svg';
import leaf3 from '../../assets/images/order/leaf3.svg';

import label from '../../assets/images/order/label.jpg';
import tea1 from '../../assets/images/order/tea1.jpg';
import tea2 from '../../assets/images/order/tea2.jpg';
import tea3 from '../../assets/images/order/tea3.jpg';

import classNames from 'classnames/bind';
import styles from './Order.module.scss';
let cx = classNames.bind(styles);

const PRODUCTS = [
    { id: 0, image: leaf1, weight: 80, price: 10, count: 15},
    { id: 1, image: leaf2, weight: 140, price: 25, count: 0},
    { id: 2, image: leaf3, weight: 260, price: 105, count: 1},
]

const Order = () => {
    return (
        <div className={cx('order', 'section_classic')}>
            <div className={styles.booklets}>
                <img src={label} alt="Label"/>
                <img src={tea1} alt="Tea"/>
                <img src={tea2} alt="Tea"/>
                <img src={tea3} alt="Tea"/>
            </div>
            <div className={styles.form}>
                <div className={styles.formTitle}>
                    English Breakfast
                </div>
                <div className={styles.formSubtitle}>
                    Relaxing Green Tea
                    packaged in London
                </div>

                <div className={styles.formFields}>
                    {PRODUCTS.map((item) => (
                        <div key={item.id} className={styles.product}>
                            <img src={item.image} alt="Leaf"/>
                            <span>{item.weight}{' '}g</span>
                            <span>${item.price}</span>
                            <span>{item.count}</span>
                            <span>${item.price * item.count}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.formTotal}>
                    Total price: ${300}
                </div>

                <div className={styles.formButtons}>
                    <Button type="success"></Button>
                    <Button type="light" text="Buy as a gift"></Button>
                </div>
            </div>
        </div>
    );
};

export default Order;