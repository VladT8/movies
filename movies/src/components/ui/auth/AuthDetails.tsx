import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out succes");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authUser ? (
        <button onClick={userSignOut}>Logout</button>
      ) : (
        <p>U are not logged</p>
      )}
    </>
  );
};

{/* <MenuItem onClick={handleClose}>
  {authUser ? (
    <Link to="/profile">Profile</Link>
  ) : (
    <Link to="/register">Registration</Link>
  )}
</MenuItem>; */}
