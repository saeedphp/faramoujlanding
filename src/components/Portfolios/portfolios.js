import React from 'react';
import styles from './portfolios.module.css';
import PortfoliosItem, {getAllPortfolios} from "./PortfoliosItem";

const Portfolios = () => {

    const allPortfolios = getAllPortfolios();

    return (

        <section className={styles.portfolios}>
            <div className={styles.card}>

                {allPortfolios.map((allPortfolio) => (
                    <PortfoliosItem
                        key={allPortfolio.id}
                        id={allPortfolio.id}
                        title={allPortfolio.title}
                        enTitle={allPortfolio.enTitle}
                        image={allPortfolio.image}
                        category={allPortfolio.category}
                        link={allPortfolio.link}
                    />
                )).reverse()}

            </div>
        </section>
    );
};

export default Portfolios;