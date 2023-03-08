import React, { useRef, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import styles from "./login-screen.module.css";
import Login from "./../../component/login/Login";

const LoginScreen = () => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const loginStyles = {
    backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/b77751c7-0e02-4941-af39-30514ff6b3e2/a94f183a-3322-4b6e-a09e-9ac09ed6ce19/ID-en-20211026-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleShowModalSignIn = () => {
    setSignInModal(true);
  };

  const handleShowModalSignUp = (e) => {
    e.preventDefault();
    setSignUpModal(true);
  };

  const handleClose = () => {
    setSignInModal(false);
    setSignUpModal(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <>
      <div className={styles.Login} style={loginStyles}>
        <div className={styles.overlay}></div>
        <nav className={styles.nav}>
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="something"
          />
          <button onClick={handleShowModalSignIn}>Sign In</button>
        </nav>
      </div>
      <Login
        signInState={signInModal}
        signUpState={signUpModal}
        onClose={handleClose}
        onRegister={handleRegister}
        onSignIn={handleSignIn}
        onShowModalLogin={handleShowModalSignUp}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </>
  );
};

export default LoginScreen;
