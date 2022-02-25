import styles from './Tel.module.css';

const Tel = () => {
    return (
        <div className={styles.tel}>
            <button className={styles.btn}>
                <a href="tel:02188015422">
                    021-88015422
                </a>
            </button>
            <div className={styles.wrapper}>
                <i className="fa fa-phone"></i>
                <span className={styles.circle}></span>
            </div>
        </div>
    );
};

export default Tel;