import Modal from "../modal";
const ModalLogin = ({ clicked, emailRef, passwordRef, close, modalType }) => {
  return (
    <Modal close={close}>
      <form onSubmit={clicked} onClick={(e) => e.stopPropagation()}>
        <h3>{modalType}</h3>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
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
