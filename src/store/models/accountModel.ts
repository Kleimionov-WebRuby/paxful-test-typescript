import { BUYER_TYPE, SELLER_TYPE } from 'constants/account';

export type AccountState = typeof BUYER_TYPE | typeof SELLER_TYPE;
