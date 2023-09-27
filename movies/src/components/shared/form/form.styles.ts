import styled from 'styled-components';
import { Theme, ThemeType } from '../../themeContext/themes';

interface FormContainerProps {
   theme?: Theme;
   myTheme?: ThemeType;
}

export const FormContainer = styled.form<FormContainerProps>`
  width: 500px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button<FormContainerProps>`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.text};
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
   background-color: #2980b9;
  }
`;

export const FormError = styled.p<FormContainerProps>`
   font-size: 16px;
   color: red;
`