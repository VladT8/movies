import { useState } from "react";
import { FormComponent, formikComponentProps } from "../../shared/form/form";
import { Field, ErrorMessage } from "formik";
import { CheckboxLabel, FormError } from "../../shared/form/form.styles";
import { Link } from "react-router-dom";
import "./sign.scss";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data");

  return (
    <div className="sign_container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Registration</h3>
        <input
          type="email"
          placeholder="your email here"
          {...register("email", { required: "This is required" })}
        />
        <p className="validation-message">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="your password here"
          {...register("password", {
            required: "This is required",
            minLength: { value: 4, message: "minimum length is 4" },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message: "1 upper, 1 lower, 1 number",
            },
          })}
        />
        <p className="validation-message">{errors.password?.message}</p>
        <button type="submit" disabled={!isValid}>
          Register
        </button>
        <div className="form__link">
          have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

// <div className="sign_container">
//   <form onSubmit={signUp}>
//     <h3>Registration</h3>
//     <input
//       type="email"
//       placeholder="email"
//       required
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//     />
//     <input
//       type="password"
//       placeholder="password"
//       required
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <button type="submit">Sign Up</button>
//     <div className="form__link">
//       have an account? <Link to="/login">Login</Link>
//     </div>
//   </form>
// </div>

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
