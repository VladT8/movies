import { FormComponent } from "../../shared/form/form"
import { Field, ErrorMessage } from 'formik'
import { CheckboxLabel, FormError } from "../../shared/form/form.styles"

interface formikComponentProps {
   formName: string
}

export const SignUpComponent: React.FC<formikComponentProps> = ({formName}) => {

   return (
      <FormComponent formName="SignUp">
         <Field 
            type='text'
            name='firstName' 
            placeholder='First Name'
         />
         <ErrorMessage className='form__error' name='firstName'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
         <Field 
            type='text'
            name='lastName' 
            placeholder='Last Name' 
         />
         <ErrorMessage className='form__error' name='lastName'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
         <Field 
            type='email'
            name='email' 
            placeholder='Email' 
         />
         <ErrorMessage className='form__error' name='email'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
         <Field 
            type='password'
            name='password' 
            placeholder='Password' 
         />
         <ErrorMessage className='form__error' name='password'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
         <Field 
            type='password'
            name='repeatPassword'
            placeholder='Repeat password' 
         />
         <ErrorMessage className='form__error' name='repeatPassword'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
         <CheckboxLabel>
            <Field type='checkbox' name='terms' />
            Согласиться с политикой конфиденциальности
         </CheckboxLabel>
      </FormComponent>
   )
}