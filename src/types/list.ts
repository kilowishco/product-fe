import { GiversProps, ListItemGiverProps } from './givers';

//==============================================================================
// Wishlist item
//==============================================================================

export type ListItemProps = {
  type: string;
  title: string;
  description?: string;
  link?: string;
  image?: string;
  bank_account_number?: string;
  bank_name?: string;
  profile_bank?: boolean;
  list_item_givers?: ListItemGiverProps[];
};

//==============================================================================
// List
//==============================================================================

export type ListProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  givers?: GiversProps;
  listItems?: ListItemProps[];
};
