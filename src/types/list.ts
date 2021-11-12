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

//==============================================================================
// Wishlist item
//==============================================================================

export type ListItemProps = {
  type: string;
  title: string;
  description?: string;
  link?: string;
  image?: string;
  bank_account_number?: number;
  bank_name?: string;
};
