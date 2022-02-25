import styles from './Consultant.module.css';
import imgPath from '../../assets/images/advice.png';
import Card from "../UI/Card";

const Consultant = () => {
    return (
        <section id="consultant" className={styles.consultant}>
            <div className="col-2">

            </div>
            <Card className={`col-8 ${styles['consultant-wrap']}`}>
                <div>
                    <iframe width="100%" height="500px" scrolling="no" frameBorder="0"
                            src="https://bio.faramouj.com/landing"></iframe>
                </div>
                <div>
                    <img src={imgPath} alt="advice" />
                </div>
            </Card>
            <div className="col-2">

            </div>
        </section>
    )
};

export default Consultant;