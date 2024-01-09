import { useState } from "react";
import { FormComponent, formikComponentProps } from "../../shared/form/form";
import { Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  CheckboxLabel,
  FormError,
} from "../../shared/form/form.styles";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./sign.scss";
export const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // <FormComponent formName="SignIn" onSubmit={signIn}>
    //   <Field
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e: any) => setEmail(e.target.value)}
    //   />
    //   <ErrorMessage className="form__error" name="email">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <Field
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e: any) => setPassword(e.target.value)}
    //   />
    //   <ErrorMessage className="form__error" name="password">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <CheckboxLabel>
    //     <Field type="checkbox" name="terms" />
    //     Remember me
    //   </CheckboxLabel>
    // </FormComponent>

    <div className="sign_container">
      <form onSubmit={signIn}>
        <h3>Login</h3>
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <div className="form__link">
          don't have account? <Link to="/register">Registration</Link>
        </div>
      </form>
    </div>
  );
};

// export const SignInComponent: React.FC<formikComponentProps> = ({
//   formName,
// })
