import { ReactNode, Ref } from 'react';

//==============================================================================
// Button
//==============================================================================

export type ButtonProps = {
  size: string;
  text: string | ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
};
