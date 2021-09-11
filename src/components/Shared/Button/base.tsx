import { FC, ReactNode } from 'react';
import { ButtonContainer } from './button.styled';

type ButtonTheme = {
  [key: string]: string;
};

type ButtonProps = {
  size: string;
  text: string | ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

const dimension: ButtonTheme = {
  sm: 'button-sm',
  lg: 'button-lg',
};

const BaseButton: FC<ButtonProps> = ({ size, text, className, onClick, type }) => {
  return (
    <ButtonContainer
      className={`${dimension[size]} ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default BaseButton;
