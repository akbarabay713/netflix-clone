import styles from "./profile-screen.module.css";
import Navbar from "../../component/navbar/navbar";
import { auth, signOut } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import React from "react";
const Profile = () => {
  const user = useSelector(selectUser);

  const handleLogout = () => {
    signOut(auth)
      .then((user) => {
        // Sign-out successful.
        console.log(user);
        // history.replace("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={styles.profile}>
      <Navbar />
      <div className={styles.contents}>
        <h1>Edit Profile</h1>
        <div className={styles.hr} />
        <div className={styles.devider}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="somethhing"
          />

          <div className={styles.content}>
            <p>{user.email}</p>
            <h3>Plans (Current Plan: Premium)</h3>
            <div className={styles.hr} />

            <button className={styles.signOut} onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
