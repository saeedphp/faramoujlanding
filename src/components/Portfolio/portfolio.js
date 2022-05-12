import styles from './portfolio.module.css';
import PortfolioItem from "./portfolio-item";
import Button from "../UI/button";
import {Link} from "react-router-dom";

const Portfolio = () => {

    return (
        <section id="portfolio" className={`${styles.portfolio}`}>
            <h2 className={styles['portfolio-title']}>
                سایت خوب ببین
            </h2>
            <div className={`${styles['portfolio-wrapper']}`}>

                <ul>
                    <PortfolioItem/>
                </ul>

            </div>
            <div className={styles.controllers}>
                <Link to="/portfolios">
                    <Button>
                        مشاهده بیشتر
                    </Button>
                </Link>
            </div>
        </section>
    )
};

export default Portfolio;