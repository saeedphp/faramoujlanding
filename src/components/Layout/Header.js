import styles from './Header.module.css';
import Logo from "./Logo";
import Navigation from "./Navigation";
import Tel from "./Tel";
import {Fragment} from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
    return (
      <Fragment>
          <div className={styles['header-desktop']}>
              <Logo/>
              <Navigation/>
              <Tel/>
          </div>
          <div className={styles['header-mobile']}>
              <MobileMenu/>
              <Tel/>
              <Logo/>
          </div>
      </Fragment>
    );
};

export default Header;