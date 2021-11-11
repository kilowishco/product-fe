import { GiversProps } from './givers';

//==============================================================================
// List
//==============================================================================

export type ListProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  givers?: GiversProps;
};
