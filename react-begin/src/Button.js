import PropTypes from "prop-types";
import styles from "./Button.module.css";

// ~~.module.css => css를 모듈화해서 호출할 수 있음.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
