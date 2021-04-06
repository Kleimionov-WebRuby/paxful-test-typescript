import { Trade } from 'entries/trade';

export type TradeState = {
  items: Trade[],
  isLoading: boolean,
  errors: string[],
  isSendingMessage: boolean,
};
