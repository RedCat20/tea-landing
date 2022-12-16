import {FC, useState} from "react";
import styles from './Checkbox.module.scss';

interface Props {
    title: string;
}

const Checkbox:FC<Props> = ( {title} ) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={styles.root}>
            <label>

                <svg
                    className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : ""}`}
                    // This element is purely decorative so
                    // we hide it for screen readers
                    aria-hidden="true"
                    viewBox="0 0 15 11"
                    fill="none"
                >
                    <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
                    />
                </svg>

                <input
                    type="checkbox"
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />

                <span className={styles.title}>{title}</span>

            </label>
        </div>
    );
}

export default Checkbox;