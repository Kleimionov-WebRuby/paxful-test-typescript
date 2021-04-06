import { createSelector } from 'reselect';
import { RootState } from 'store/reducers';
import { Trade } from 'entries/trade';
import { NOT_FOUND } from 'constants/index';

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

const trades = (state: Trade[], id: string) => ({
  items: state,
  id,
});

export const getTradeById = createSelector([trades], ({ items, id }) => {
  const trade = items.find((trade: Trade) => trade.id === id);

  if (!trade) {
    return NOT_FOUND;
  }

  return trade;
});
