import styles from "./modal.module.css";

const Modal = ({ children, close }) => {
  return (
    <div className={styles.content} onClick={close}>
      <div onClick={(e) => e.stopPropagation()} style={{ zIndex: "99" }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
