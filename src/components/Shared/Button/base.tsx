import { forwardRef } from 'react';
import { ButtonContainer } from './button.styled';
import { ButtonProps } from '../../../types';

type ButtonTheme = {
  [key: string]: string;
};

const dimension: ButtonTheme = {
  sm: 'button-sm',
  lg: 'button-lg',
};

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, text, className, onClick, type, disabled }, ref) => {
    return (
      <ButtonContainer
        className={`${dimension[size]} ${className} ${disabled ? 'disabled' : ''}`}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        ref={ref}
        aria-disabled={disabled}>
        {text}
      </ButtonContainer>
    );
  }
);

export default BaseButton;
