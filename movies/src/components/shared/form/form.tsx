import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  ButtonWrapper,
  FormContainer,
  FormInputs,
  FormTitle,
} from "./form.styles";

interface formikProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  terms: boolean;
}

export interface formikComponentProps {
  formName: string;
  children?: any;
  onSubmit?: any;
}

const regularExpressionPassword =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const FormComponent: React.FC<formikComponentProps> = ({
  formName,
  children,
  onSubmit,
}) => {
  const handleSubmit = (values: any, formikBag: any) => {
    onSubmit();
    formikBag.setSubmitting(false);
  };
  return (
    <Formik<formikProps>
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(4, "Минимум 4 символа")
          .required("Обязательно для заполнения!"),
        lastName: Yup.string()
          .min(4, "Минимум 4 символа")
          .required("Обязательно для заполнения!"),
        email: Yup.string()
          .email("Правильно заполните email")
          .required("Обязательно для заполнения!"),
        password: Yup.string()
          .min(4, "Минимум 4 символа")
          .required("Обязательно для заполнения!")
          .matches(regularExpressionPassword, {
            message: "1 lover letter, 1 upper, 1 symbol [!@#$%^&*], 1 number",
          }),
        repeatPassword: Yup.string().oneOf(
          [Yup.ref("password", undefined)],
          "пароль должен совпадать"
        ),
        terms: Yup.boolean()
          .required("Обязательно согласие")
          .oneOf([true], "Обязательно согласие"),
      })}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <FormTitle>{formName}</FormTitle>
        <Form action="" className="form">
          <FormInputs>{children}</FormInputs>
          
            <button type="submit">Submit</button>
          
        </Form>
      </FormContainer>
    </Formik>
  );
};
