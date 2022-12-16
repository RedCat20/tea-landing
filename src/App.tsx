import React, {FC} from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Header from "./components/layout/Header/Header";
import Starter from "./components/Starter/Starter";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/layout/Footer/Footer";
import Order from "./components/Order/Order";
import Subscription from "./components/Subscription/Subscription";
import Payment from "./components/Payment/Payment";
import Delivery from "./components/Delivery/Delivery";

let cx = classNames.bind(styles);

const App:FC = () => {
  return (
    <div className={cx('root', {'container': true})}>
        <Header/>

        <Starter/>
        <About/>

        <Advantages/>
        <Catalog/>

        <Order/>
        <Subscription/>

        <Delivery/>
        <Payment/>

        <Footer/>
    </div>
  );
}

export default App;