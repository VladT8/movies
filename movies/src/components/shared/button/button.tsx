import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';

interface ButtonComponentProps {
   onClick: () => void;
   buttonText?: React.ReactNode;
   disabled?: string
}
 
export const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, buttonText, disabled }) => {
   return (
     <Button variant="contained" color="primary" onClick={onClick}>
      {buttonText}
     </Button>
   );
};