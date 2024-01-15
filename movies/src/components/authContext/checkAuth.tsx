import { useContext } from "react";
import { AuthContext } from "./authProvider";
import { Navigate } from "react-router-dom";

interface CheckAuthUserProps {
  children: JSX.Element;
}

export const CheckAuthUser = ({ children }: CheckAuthUserProps) => {
  const { userAuth } = useContext(AuthContext);

  if (!userAuth) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  } else {
    return children;
  }
};
