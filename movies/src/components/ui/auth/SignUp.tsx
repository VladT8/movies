import { useState } from "react";
import { FormComponent, formikComponentProps } from "../../shared/form/form";
import { Field, ErrorMessage } from "formik";
import { CheckboxLabel, FormError } from "../../shared/form/form.styles";
import { Link } from "react-router-dom";
import "./sign.scss";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // <FormComponent formName="SignUp">
    //   <Field type="text" name="firstName" placeholder="First Name" />
    //   <ErrorMessage className="form__error" name="firstName">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <Field type="text" name="lastName" placeholder="Last Name" />
    //   <ErrorMessage className="form__error" name="lastName">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <Field type="email" name="email" placeholder="Email" />
    //   <ErrorMessage className="form__error" name="email">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <Field type="password" name="password" placeholder="Password" />
    //   <ErrorMessage className="form__error" name="password">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <Field
    //     type="password"
    //     name="repeatPassword"
    //     placeholder="Repeat password"
    //   />
    //   <ErrorMessage className="form__error" name="repeatPassword">
    //     {(msg) => <FormError>{msg}</FormError>}
    //   </ErrorMessage>
    //   <CheckboxLabel>
    //     <Field type="checkbox" name="terms" />
    //     Согласиться с политикой конфиденциальности
    //   </CheckboxLabel>
    // </FormComponent>
    <div className="sign_container">
      <form onSubmit={signUp}>
        <h3>Registration</h3>
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
        <button type="submit">Sign Up</button>
        <div className="form__link">
          have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

// export const SignUpComponent: React.FC<formikComponentProps> = ({
//   formName,
// })
