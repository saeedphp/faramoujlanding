import styles from './portfolio.module.css';
import PortfolioItem from "./portfolio-item";

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
        </section>
    )
};

export default Portfolio;