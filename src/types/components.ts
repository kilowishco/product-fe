import { ReactNode, Ref, CSSProperties } from 'react';

//==============================================================================
// Button
//==============================================================================

export interface CustomStyleProperties extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export type ButtonProps = {
  size: string;
  text: string | ReactNode;
  className?: string;
  style?: CustomStyleProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
};
