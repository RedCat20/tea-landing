import React, {FC, useState} from "react";
import styles from './TextField.module.scss';

interface Props {
    title?: string;
    width?: number;
}

const TextField:FC<Props> = ( {title, width} ) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <input  className={styles.field} style={{width: width ? `${width}px` : 'auto'}} type="text" placeholder={title || ''}/>
        </div>
    );
}

export default TextField;