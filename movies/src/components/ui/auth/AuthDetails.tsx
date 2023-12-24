import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
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
  }, []);
  return (
    <div>
      {authUser ? <p>{`Signet In`}</p> : <p>Signet Out</p>}
    </div>
  );
};
