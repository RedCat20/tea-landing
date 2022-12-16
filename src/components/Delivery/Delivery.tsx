import React from 'react';
import teaCups from '../../assets/images/delivery/tea-cups.jpg';

import classNames from 'classnames/bind';
import styles from './Delivery.module.scss';
import Button from "../general/Button/Button";
let cx = classNames.bind(styles);


const Delivery = () => {
    return (
        <div className={cx('delivery', 'section_classic')}>
            <div className={styles.form}>
                <div className={styles.formTitle}>
                    Delivery
                </div>

                <div className={styles.fields}>
                    <div className={cx( 'fieldsRow', 'fieldsTwoLine')}>
                        <input className={styles.field} type="text" placeholder="Name"/>
                        <input className={styles.field} type="text" placeholder="Last name"/>
                    </div>
                    <div className={cx( 'fieldsRow', 'fieldsLine')}>
                        <input className={styles.field} type="text" placeholder="Phone"/>
                    </div>
                    <div className={cx( 'fieldsRow','fieldsLine')}>
                        <input className={styles.field} type="email" placeholder="Email"/>
                    </div>
                    <div className={cx( 'fieldsRow', 'fieldsTwoLine')}>
                        <input className={styles.field} type="text" placeholder="City"/>
                        <input className={styles.field} type="text" placeholder="Street"/>
                    </div>
                    <div className={cx( 'fieldsRow', 'fieldsThreeLine')}>
                        <input className={styles.field} type="text" placeholder="House"/>
                        <input className={styles.field} type="text" placeholder="Apartment"/>
                        <input className={styles.field} type="text" placeholder="ZIP-Code"/>
                    </div>
                </div>

                <div className={styles.formButtons}>
                    <Button type="secondary" text="Send" width={165}></Button>
                    <Button type="light" text="Back" width={165}></Button>
                </div>
            </div>
            <img src={teaCups} alt="Cups" className={styles.deliveryImg}/>
        </div>
    );
};

export default Delivery;