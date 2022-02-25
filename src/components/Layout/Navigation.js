import styles from './Navigation.module.css';
import {getAllMenuItems} from "../../data/menu";

const Navigation = () => {

    const menuItems = getAllMenuItems();

    return (
        <div className={styles.nav}>
            <ul>
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                        <a href={`/#${menuItem.link}`}>
                            {menuItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;