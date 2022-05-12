import styles from './Footer.module.css';
import React,{Fragment,useState,useEffect} from "react";
import Telegram from "../Icons/Telegram";
import Insta from "../Icons/Insta";
import Whatsapp from "../Icons/Whatsapp";

const Footer = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return(
        <Fragment>

            <div className={styles.footer}>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/faramouj/">
                            <Insta />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/faramoujco">
                            <Telegram />
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=989920484869">
                            <Whatsapp />
                        </a>
                    </li>
                </ul>
            </div>

            {showBtn && (
                <button onClick={scrollToTop} className={styles['back-to-top']}>
                    <i className="fa fa-arrow-up"></i>
                </button>
            )}

        </Fragment>
    )
};

export default Footer;