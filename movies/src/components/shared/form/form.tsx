import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FormContainer, FormError } from './form.styles'
import { ButtonComponent } from '../button/button'

interface formikProps {
   firstName: string,
   lastName: string,
   email: string,
   password: string,
   repeatPassword: string,
   terms: boolean,
}

interface formikComponentProps {
   formName: string
}

const regularExpressionPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

export const FormComponent: React.FC<formikComponentProps> = ({formName}) => {

   return (
      <Formik<formikProps> 
         initialValues = {{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            terms: false,
         }}
         validationSchema = {Yup.object({
            firstName: Yup.string()
               .min(4, 'Минимум 4 символа')
               .required('Обязательно для заполнения!'),
            lastName: Yup.string()
               .min(4, 'Минимум 4 символа')
               .required('Обязательно для заполнения!'),
            email: Yup.string()
               .email('Правильно заполните email')
               .required('Обязательно для заполнения!'),
            password: Yup.string()
               .min(4, 'Минимум 4 символа')
               .required('Обязательно для заполнения!')
               .matches(regularExpressionPassword, {message: '1 lover letter, 1 upper, 1 symbol [!@#$%^&*], 1 number'}),
            repeatPassword: Yup.string()
               .oneOf([Yup.ref('password', undefined)], 'пароль должен совпадать'),
            terms: Yup.boolean()
               .required('Обязательно согласие')
               .oneOf([true], 'Обязательно согласие')
         })}
         onSubmit = {values => alert(JSON.stringify(values, null, 2))}
      >
         <FormContainer>
         <h2>{formName}</h2>
            <Form action='' className='form'>
               <div className="form__inputs">
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
                  <Field 
                     type='checkbox'
                     name='terms'
                  />
                  <ErrorMessage className='form__error' name='terms'>{msg => <FormError>{msg}</FormError>}</ErrorMessage>
               </div>
               <ButtonComponent onClick={() => alert('Form submitted')} buttonText={'SUBMIT'}/>
            </Form>
         </FormContainer>
      </Formik>
   )
}