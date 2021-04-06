import { Trade } from 'entries/trade';

export type CurrentTradeState = {
  item: Trade,
  isLoading: boolean,
  error: string,
};
