//==============================================================================
// Givers
//==============================================================================

export type GiversProps = {
  checked: number;
  size: number;
  secret_checked: number;
};

//==============================================================================
// List Item Givers
//==============================================================================

// TODO: Sync this with the Profile Props
export type ListItemGiverProps = {
  name: string;
  email: string;
  verified: boolean;
  amount_paid?: number;
  currency?: string;
  image?: string;
};
