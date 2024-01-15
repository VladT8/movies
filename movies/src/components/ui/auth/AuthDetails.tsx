import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./sign.scss";
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
        alert("sign out succes");
      })
      .catch((error) => console.log(error));
      
  };
  return (
    <>
      {authUser ? (
        <div>
          <MenuItem>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <button className="button-logout" onClick={userSignOut}>
              Logout
            </button>
          </MenuItem>
        </div>
      ) : (
        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
      )}
    </>
  );
};
