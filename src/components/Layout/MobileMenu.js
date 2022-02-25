import {Fragment, useState} from "react";
import styles from './MobileMenu.module.css';
import {getAllMenuItems} from "../../data/menu";

const MobileMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const showSidebar = () => {
        setShowMenu(!showMenu);
    };

    const menuItems = getAllMenuItems();

    return (
        <Fragment>
            <div className={styles.menu}>
                <div className={styles['hambur-menu']}>
                    <i onClick={showSidebar} className="fa fa-bars"></i>
                </div>
                <nav className={showMenu ? 'nav active' : 'nav'}>
                    <ul onClick={showSidebar}>
                        <li>
                            <i className="fa fa-bars"></i>
                        </li>
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <a href={`/#${menuItem.link}`}>
                                    {menuItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
};

export default MobileMenu;