import React, {FC} from 'react';
import styles from './TeaItem.module.scss';
import Button from "../../general/Button/Button";
import Price from "../../general/Price/Price";

interface Props {
    /// оце визначені властивості плюс ще, які завгодно але строки
    id: number,
    title: string,
    subtitle: string,
    images: string[],
    ['keyOfStringProp']?: string,
    ['keyOfNumberProp']?: number
}

// ось відразу тут в пропсах деструктуризація чаю, а не об'єкт в props
const TeaItem:FC<Props>= ( {id,title,subtitle,images} ) => {
    return (
        <div className={styles.tea}>

            <div className={styles.teaImages}>
                <img className={styles.teaImage} src={images[0]} alt="Tea"/>
                <img className={styles.teaImage} src={images[1]} alt="Tea"/>
            </div>

            <div className={styles.teaDescription}>
                <div className={styles.teaTitle}>
                    {title}
                </div>
                <div className={styles.teaSubTitle}>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export default TeaItem;