import { createSelector } from 'reselect';

import { RootState } from 'store/reducers';

export const getTradesState = (state: RootState) => state.trades;

export const getTradesList = createSelector(
  getTradesState,
  (state) => state.items,
);
export const tradesError = createSelector(
  getTradesState,
  (state) => state.errors,
);
export const tradesIsMessageSending = createSelector(
  getTradesState,
  (state) => state.isSendingMessage,
);
