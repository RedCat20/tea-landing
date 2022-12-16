import React, {FC} from 'react';
import styles from './TeaItem.module.scss';
import Button from "../../general/Button/Button";
import Price from "../../general/Price/Price";

interface Props {
    /// оце визначені властивості плюс ще, які завгодно але строки
    tea: {
        // id: number,
        title: string,
        subtitle: string,
        image: string,
        package: { text: string, weight: string },
        ['keyOfStringProp']?: string,
        ['keyOfNumberProp']?: number
    };
}

// ось відразу тут в пропсах деструктуризація чаю, а не об'єкт в props
const TeaItem:FC<Props>= ({tea}) => {
    return (
        <div className={styles.tea}>
            <img className={styles.teaImage} src={tea.image} alt="Tea"/>

            <div className={styles.teaDescription}>
                <div className={styles.teaTitle}>
                    {tea.title}
                </div>
                <div className={styles.teaSubTitle}>
                    {tea.subtitle}
                </div>
                <div className={styles.teaPackage}>
                    <span>{tea.package.text}</span>
                    <span>{tea.package.weight}</span>
                </div>
            </div>

            <div className={styles.teaActions}>
                <div>
                    <Price/>
                </div>
                <Button/>
            </div>

        </div>
    );
}

export default TeaItem;