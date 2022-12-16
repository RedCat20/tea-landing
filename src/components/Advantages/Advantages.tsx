import React, {FC} from 'react';

import img1_1 from '../../assets/images/advantages/1.svg';
import img1_2 from '../../assets/images/advantages/numbers/1.png';

import img2_1 from '../../assets/images/advantages/2.svg';
import img2_2 from '../../assets/images/advantages/numbers/2.png';

import img3_1 from '../../assets/images/advantages/3.svg';
import img3_2 from '../../assets/images/advantages/numbers/3.png';

import img4_1 from '../../assets/images/advantages/4.svg';
import img4_2 from '../../assets/images/advantages/numbers/4.png';

import TeaItem from "./TeaItem/TeaItem";

import classNames from 'classnames/bind';
import styles from './Advantages.module.scss';

let cx = classNames.bind(styles);

const TEAS = [
    {
        id: 0,
        title: 'Drying of sheets',
        subtitle: `The stages of tea production 
        include wilting, twisting, 
        fermentation, drying, 
        sorting, and packaging.`,
        images: [img1_1,img1_2],
    },
    {
        id: 1,
        title: 'Packaging',
        subtitle: `This is the path that any 
        black tea goes through
        before it gets to our table.`,
        images: [img2_1,img2_2],
    },
    {
        id: 2,
        title: 'Making tea',
        subtitle: `Brewing and drinking tea 
        can be very different. There 
        are a lot of national traditions.`,
        images: [img3_1, img3_2],
    },
    {
        id: 3,
        title: 'Delivery to you',
        subtitle: `We will deliver your favorite 
        tea directly to your home. 
        The best tea for the best 
        customers. `,
        images: [img4_1, img4_2] },
]

const Catalog:FC = () => {

    return (
        <div className={cx(styles.advantages, 'section_classic')}>
            {/*{new Array(6).fill(undefined).map((item) => ( <div>item</div> )) }*/}
            <div className={styles.advantagesList}>
                {TEAS.map((tea) => (
                    <TeaItem key={tea.id} {...tea}/>
                ))}
            </div>
        </div>
    );
}

export default Catalog