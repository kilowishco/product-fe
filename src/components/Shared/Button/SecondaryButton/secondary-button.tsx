import { FC } from 'react';
import { PrimaryButtonContainer } from './secondary-button.styled';
import { ButtonProps } from '../../../../types';

const PrimaryButton: FC<ButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
}) => {
  return (
    <PrimaryButtonContainer
      size={size}
      className={className}
      text={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
    />
  );
};

export default PrimaryButton;
