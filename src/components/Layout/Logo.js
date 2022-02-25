import React from "react";
import styles from './Logo.module.css';
import logoImg from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImg} alt="Faramouj Logo"/>
        </div>
    )
};

export default Logo;