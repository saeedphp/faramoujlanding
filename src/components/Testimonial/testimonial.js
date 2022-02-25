import styles from './testimonial.module.css';
import TestimonialItem from "./testimonial-item";
import Card from "../UI/Card";

const Testimonial = () => {
    return (
        <section id="testimonial" className={styles.testimonial}>
            <div className={styles['testimonial-wrapper']}>
                <div className={`col-2 ${styles['right-bg']}`}>
                </div>
                <Card className={`col-8 ${styles['testimonial-wrapper__center']}`}>
                    <h3>
                        مشتریان درباره ما چی میگن
                    </h3>
                    <div className={styles.card}>
                        <ul>
                            <TestimonialItem/>
                        </ul>
                    </div>
                </Card>
                <div className={`col-2 ${styles['left-bg']}`}>
                </div>
            </div>
        </section>
    )
};

export default Testimonial;