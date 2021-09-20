import { FC } from 'react';
import { ButtonContainer } from './button.styled';
import { ButtonProps } from '../../../types';

type ButtonTheme = {
  [key: string]: string;
};

const dimension: ButtonTheme = {
  sm: 'button-sm',
  lg: 'button-lg',
};

const BaseButton: FC<ButtonProps> = ({ size, text, className, onClick, type, disabled }) => {
  return (
    <ButtonContainer
      className={`${dimension[size]} ${className} ${disabled ? 'disabled' : ''}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      aria-disabled={disabled}>
      {text}
    </ButtonContainer>
  );
};

export default BaseButton;
