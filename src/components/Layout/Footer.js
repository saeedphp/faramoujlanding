import styles from './Footer.module.css';
import React,{Fragment,useState,useEffect} from "react";

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
                        <a href="https://t.me/faramouj_com">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/faramouj/?hl=en">
                            <i className="fa fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/faramouj/?hl=en">
                            <i className="fa fa-whatsapp"></i>
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