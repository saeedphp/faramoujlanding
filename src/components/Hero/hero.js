import styles from './hero.module.css';
import heroImg from '../../assets/images/homeBanner.webp';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles['hero-wrapper']}`}>
                <div className={`${styles['hero-wrapper__img']}`}>
                    <a>
                        <img src={heroImg} alt="hero image"/>
                    </a>
                </div>
                <div className={`${styles['hero-wrapper__info']}`}>
                    <div className="txtCenter">
                        <h2>
                            یه طراحی سایت حرفه ای
                            <br/>
                            از اینجا شروع میشه
                        </h2>
                        <a href="tel:02188015422">
                            021-88015422
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;