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
        onHandleChange={handleChange}
        user={user}
        errors={errors}
      />
    </>
  );
};

export default LoginScreen;
