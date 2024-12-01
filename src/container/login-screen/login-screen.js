import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import styles from "./login-screen.module.css";
import Login from "./../../component/login/Login";
import Joi from "joi-browser";
const LoginScreen = () => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    const errors = validate();

    setErrors(errors || {});
    if (errors) return;

    signInWithEmailAndPassword(auth, user.email, user.password)
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

  const schema = {
    email: Joi.string().required().label("Email").email(),
    password: Joi.string().required().label("Password").min(5),
  };

  const handleChange = ({ currentTarget: input }) => {
    const error = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...user };
    data[input.name] = input.value;
    setUser(data);
    setErrors(error);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(user, schema, option);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.overlay}></div>
        <img src="/banner.jpg" alt="Banner" className={styles.bannerImage} />
        <nav className={styles.nav}>
          <img src="/netflix.png" alt="logo" />
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
        onHandleChange={handleChange}
        user={user}
        errors={errors}
      />
    </>
  );
};

export default LoginScreen;
