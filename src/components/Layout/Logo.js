import React from "react";
import styles from './Logo.module.css';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={logoImg} alt="Faramouj Logo"/>
            </Link>
        </div>
    )
};

export default Logo;