import Modal from "../modal";
import Input from "../../input/Input";
const ModalLogin = (props) => {
  const { clicked, onHandleChange, user, errors, close, modalType } = props;
  return (
    <Modal close={close}>
      <form onSubmit={clicked} onClick={(e) => e.stopPropagation()}>
        <h3>{modalType}</h3>
        <Input
          label="email"
          value={user.email}
          errors={errors}
          onHandleChange={onHandleChange}
        />
        <Input
          label="password"
          value={user.password}
          errors={errors}
          onHandleChange={onHandleChange}
        />
        <button type="submit">{modalType}</button>
        {modalType === "Sign In" ? (
          <p>
            New to netflix?<span onClick={close}> Sign Up Now</span>
          </p>
        ) : (
          <p>
            already have an account?<span onClick={close}> Sign in</span>
          </p>
        )}
      </form>
    </Modal>
  );
};

export default ModalLogin;
