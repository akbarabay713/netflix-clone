import styles from "./Input.module.css";
const Input = ({ label, value, onHandleChange, errors }) => {
  // console.log(errors[]);
  return (
    <div className={styles.content}>
      <input
        type={label}
        placeholder={label}
        name={label}
        value={value}
        onChange={onHandleChange}
      />
      {errors && <p className={styles.error}>{errors[label]}</p>}
    </div>
  );
};

export default Input;
