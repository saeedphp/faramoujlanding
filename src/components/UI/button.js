import styles from './button.module.css';

const Button = (props) => {

    return (
        <button onClick={props.to} className={styles.btn}>
            {props.children}
        </button>
    )
};

export default Button;