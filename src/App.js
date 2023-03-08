import React, { useEffect } from "react";
import HomeScreen from "./container/home-screen/home-screen";
import Login from "./container/login-screen/login-screen";
import { onAuthStateChanged, auth } from "../src/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Profile from "./container/profile-screen/profile-screen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        console.log(user);
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
