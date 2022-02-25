import {Fragment} from "react";
import styles from './testimonial-item.module.css';
import snappVoice from '../../assets/voice/snapp.mp4';
import fooladVoice from '../../assets/voice/foolad.mp4';

const TestimonialItem = () => {

    const snappSrc = snappVoice;

    return (
        <Fragment>
            <li className={styles.item}>
                <div className={styles['item-wrapper']}>
                    <div className={styles['item-wrapper__info']}>
                        <div className={styles.data}>
                            <div className={styles['data-user']}>
                                <i className="fa fa-user"></i>
                            </div>
                            <div className={styles['data-info']}>
                                <p className={styles.name}>
                                    بهار خرم
                                </p>
                                <span className={styles.position}>
                                    seo manager
                                </span>
                                <span className={styles.office}>
                                    اسنپ مارکت
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['item-wrapper__voice']}>
                        <audio controls src={snappSrc}></audio>
                    </div>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles['item-wrapper']}>
                    <div className={styles['item-wrapper__info']}>
                        <div className={styles.data}>
                            <div className={styles['data-user']}>
                                <i className="fa fa-user"></i>
                            </div>
                            <div className={styles['data-info']}>
                                <p className={styles.name}>
                                    مهدی رحیمی
                                </p>
                                <span className={styles.position}>
                                    CEO
                                </span>
                                <span className={styles.office}>
                                    فولاد شهمیرزاد
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['item-wrapper__voice']}>
                        <audio controls src={fooladVoice}></audio>
                    </div>
                </div>
            </li>
        </Fragment>
    )
};

export default TestimonialItem;