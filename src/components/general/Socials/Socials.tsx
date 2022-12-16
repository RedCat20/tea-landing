import React, {FC} from 'react';
import twitter from "../../../assets/images/icons/twitter.svg";
import facebook from "../../../assets/images/icons/facebook.svg";
import instagram from "../../../assets/images/icons/instagram.svg";
import styles from "./Socials.module.scss";
import {Link} from "react-router-dom";

const ICONS = [
    { src: twitter, name: 'Twitter' },
    { src: facebook, name: 'Facebook' },
    { src: instagram, name: 'Instagram' },
];

const Socials: FC = () => {
    return (
        <div className={styles.socials}>
            { ICONS.map((icon,idx) => <Link key={idx} className={styles.socialsIcon} to="/"><img src={icon.src} alt={icon.name}/></Link>) }
        </div>
    );
};

export default Socials;