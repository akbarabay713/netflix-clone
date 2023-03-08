import ModalLogin from "../modal/modal-login/ModalLogin";
import styles from "./Login.module.css";
const Login = (props) => {
  const {
    signInState,
    signUpState,
    onClose,
    onRegister,
    onSignIn,
    onShowModalLogin,
    passwordRef,
    emailRef,
  } = props;

  let text = "";
  if (signInState) {
    text = (
      <ModalLogin
        close={onClose}
        clicked={onSignIn}
        emailRef={emailRef}
        passwordRef={passwordRef}
        modalType="Sign In"
      />
    );
  } else if (signUpState) {
    text = (
      <ModalLogin
        close={onClose}
        clicked={onRegister}
        emailRef={emailRef}
        passwordRef={passwordRef}
        modalType="Sign Up"
      />
    );
  } else {
    text = (
      <div className={styles.content}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form onSubmit={onShowModalLogin} className={styles.actions}>
          <input type="email" placeholder="Email address" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    );
  }
  return text;
};

export default Login;
