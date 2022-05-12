import {Fragment, useState, useRef} from "react";
import styles from './testimonial-item.module.css';
import snappVoice from '../../assets/voice/snapp.mp4';
import fooladVoice from '../../assets/voice/foolad.mp4';

const TestimonialItem = () => {

    const [status, setStatus] = useState("pause");
    const [statusSc, setStatusSec] = useState("pause");
    const ref = useRef();
    const ref2 = useRef();

/*    const toggleStateFirst = () => {
        if (status === "pause" || statusSc === 'play') {
            setStatus("play");
            ref.current.play();
            setStatusSec("pause");
            ref2.current.pause();
        }
        else {
            setStatus("pause");
            ref.current.pause();
            setStatusSec("play");
            ref2.current.play();
        }
    };

    const toggleStateSecond = () => {
        if (statusSc === "pause" || status === 'play') {
            setStatusSec("play");
            ref2.current.play();
            setStatus("pause");
            ref.current.pause();
        }
        else {
            setStatusSec("pause");
            ref2.current.pause();
            setStatus("play");
            ref.current.play();
        }
    };*/

    const toggle1 = () => {
        if (status === 'pause'){
            setStatus("play");
            ref.current.play();
            setStatusSec("pause");
            ref2.current.pause();
        }else{
            setStatus("pause");
            ref.current.pause();
        }
    }

    const toggle2 = () => {
        if (statusSc === 'pause'){
            setStatusSec("play");
            ref2.current.play();
            setStatus("pause");
            ref.current.pause();
        }else{
            setStatusSec("pause");
            ref2.current.pause();
        }
    }

    setInterval(() => {
        const bars = document.querySelectorAll(".voice-1.play .bar");
        for (let bar of bars) {
            let mHeight = Math.floor(Math.random() * 7);
            bar.style.maxHeight = mHeight + "rem";
        }
    }, 400);

    setInterval(() => {
        const bars = document.querySelectorAll(".voice-2.play .bar");
        for (let bar of bars) {
            let mHeight = Math.floor(Math.random() * 7);
            bar.style.maxHeight = mHeight + "rem";
        }
    }, 400);



    const bars = [];
    for (let i = 0; i < 20; i++) bars.push(0);

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
                        <div className={`voice-1 ${status} ${styles.voiceWrapper}`}>
                            <button type="button" onClick={() => toggle1()}>
                                <i className={`fa fa-${status==="play" ? "pause" : "play"}`} />
                            </button>
                            <video src={snappVoice} style={{ display: "none" }} ref={ref}>
                            </video>
                            <div className="bars">
                                {bars.map((bar, i) => {
                                    return <div className="bar" key={i}></div>;
                                })}
                            </div>
                        </div>
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
                        <div className={`voice-2 ${statusSc} ${styles.voiceWrapper}`}>
                            <button ref={ref2} type="button" onClick={() => toggle2()}>
                                <i className={`fa fa-${statusSc==="play" ? "pause" : "play"}`} />
                            </button>
                            <video src={fooladVoice} style={{ display: "none" }} ref={ref2}>
                            </video>
                            <div className="bars">
                                {bars.map((bar, i) => {
                                    return <div className="bar" key={i}></div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </Fragment>
    )
};

export default TestimonialItem;