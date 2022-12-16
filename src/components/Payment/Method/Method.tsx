import React, {useEffect, useState} from 'react';
import MethodCardItem from "../MethodCardItem/MethodCardItem";
import Button from "../../general/Button/Button";

import {PAYMENT_METHODS} from "../../../data/payment.data";

import classNames from 'classnames/bind';
import styles from './Method.module.scss';
import Checkbox from "../../general/Checkbox/Checkbox";
import TextField from "../../general/TextField/TextField";
let cx = classNames.bind(styles);

const Method = () => {

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
        <div className={styles.method}>
            <h1>Payment method</h1>

            <div className={styles.methodList}>
                {
                    PAYMENT_METHODS?.map((item: any) => (<MethodCardItem key={item.id} {...item} activeMethod={activeMethod} chooseActiveMethod={chooseActiveMethod}/>))
                }
            </div>

            {activeMethod < 1 &&
              <>
                <div className={styles.fields}>
                  <div className={cx('fieldsRow', 'fieldsLine')}>
                    <input className={styles.field} type="text" placeholder="Card number"/>
                    {/*<TextField title={"Card number"} width={98}/>*/}
                  </div>
                  <div className={cx('fieldsRow', 'fieldsTwoLine')}>
                    <input className={styles.field} type="text" placeholder="Expiration date"/>
                    <input className={styles.field} type="text" placeholder="CVV"/>
                  </div>
                </div>

                <div className={styles.save}>
                  <Checkbox title="Save this card after payment"/>
                </div>

                <Button type="success" width={177} text="Pay"/>
              </>
            }
        </div>
    );
};

export default Method;