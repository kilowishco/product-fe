import { ProfileProps } from '.';
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
  owner: ProfileProps;
  title: string;
  description: string;
  link: string;
  date: string;
  event_type?: string;
  image?: string;
  givers?: GiversProps;
  published?: boolean;
  listItems?: ListItemProps[];
};
