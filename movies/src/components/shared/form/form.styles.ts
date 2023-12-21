import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface FormContainerProps {
  theme?: Theme;
  myTheme?: ThemeType;
}

export const FormContainer = styled.form<FormContainerProps>`
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme?.background};
  border: 2px solid black;
`;

export const FormTitle = styled.h2<FormContainerProps>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const FormInputs = styled.div<FormContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme?.accent};
    border-radius: 5px;
    outline: none;
    &:focus {
      border-color: #2980b9;
      box-shadow: 0 0 5px rgba(41, 128, 185, 0.5);
    }
  }
  .form__error {
    font-size: 14px;
    color: red;
    margin-bottom: 10px;
  }
`;

export const FormError = styled.p<FormContainerProps>`
  font-size: 16px;
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label<FormContainerProps>`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme?.text};
  margin-bottom: 10px;
  input {
    margin-right: 10px;
  }
`;

export const ButtonWrapper = styled.div<FormContainerProps>`
  display: flex;
  justify-content: center;
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:focus {
      outline: none;
    }
  }
`;
