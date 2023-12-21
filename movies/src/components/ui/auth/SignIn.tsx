import { FormComponent } from "../../shared/form/form";
import { Field, ErrorMessage } from "formik";
import { CheckboxLabel, FormError } from "../../shared/form/form.styles";

interface formikComponentProps {
  formName: string;
}

export const SignInComponent: React.FC<formikComponentProps> = ({
  formName,
}) => {
  return (
    <FormComponent formName="SignIn">
      <Field type="email" name="email" placeholder="Email" />
      <ErrorMessage className="form__error" name="email">
        {(msg) => <FormError>{msg}</FormError>}
      </ErrorMessage>
      <Field type="password" name="password" placeholder="Password" />
      <ErrorMessage className="form__error" name="password">
        {(msg) => <FormError>{msg}</FormError>}
      </ErrorMessage>
      <CheckboxLabel>
        <Field type="checkbox" name="terms" />
        Запомнить
      </CheckboxLabel>
    </FormComponent>
  );
};
