import React, {FC} from 'react';

import img1 from '../../assets/images/catalog/1.jpg';
import img2 from '../../assets/images/catalog/2.jpg';
import img3 from '../../assets/images/catalog/3.jpg';
import img4 from '../../assets/images/catalog/4.jpg';
import img5 from '../../assets/images/catalog/5.jpg';
import img6 from '../../assets/images/catalog/6.jpg';

import TeaItem from "./TeaItem/TeaItem";
import classNames from 'classnames/bind';
import styles from './Catalog.module.scss';

let cx = classNames.bind(styles);

const TEAS = [
    { id: 0, title: 'Bourbon Vanilla', subtitle: 'Black tea', image: img1, package: {text: 'Packaged in Ceylon', weight: '80g'} },
    { id: 1, title: 'Chamomile \n' + 'Herbal tea', subtitle: 'With flower leafs', image: img2, package: {text: 'Packaged in Sri Lanka', weight: '80g'} },
    { id: 2, title: 'English \n' + 'With flower leafs', subtitle: 'Relaxing Green Tea', image: img3, package: {text: 'Packaged in London', weight: '80g'} },
    { id: 3, title: 'Black Forest', subtitle: 'With forest berries', image: img4, package: {text: 'Packaged in Germany', weight: '80g'} },
    { id: 4, title: 'Chai Herbal', subtitle: 'Spicy Clack Tea', image: img5, package: {text: 'Packaged in India', weight: '80g'} },
    { id: 5, title: 'Chai Herbal', subtitle: 'Relaxing Green Tea', image: img6, package: {text: 'Packaged in France', weight: '80g'} },
]


const Catalog:FC = () => {

    return (
        <div className={cx(styles.catalog, 'section_classic')}>
            {/*{new Array(6).fill(undefined).map((item) => (*/}
            <div className={styles.catalogList}>
                {TEAS.map((tea) => (
                    // <TeaItem tea={...tea}/>
                    // передати властивості об'єкта через деструктуризацію
                    <TeaItem key={tea.id} tea={tea}/>
                ))}
            </div>
        </div>
    );
}

export default Catalog