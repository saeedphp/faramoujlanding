import styles from './Awards.module.css';
import AwardsItem from "./AwardsItem";

const Awards = () => {
    return (
      <section id="awards" className={styles.awards}>
          <h2>
              دست آورد های فراموج
          </h2>
          <div>
              <ul>
                  <AwardsItem/>
              </ul>
          </div>
      </section>
    );
};

export default Awards;