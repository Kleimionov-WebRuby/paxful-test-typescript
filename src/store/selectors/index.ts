import { createSelector } from 'reselect';
import { Trade } from 'entries/trade';
import { NOT_FOUND } from 'constants/index';

const trades = (state: Trade[], id: string) => ({
  items: state,
  id,
});

const getTradeById = createSelector([trades], ({ items, id }) => {
  const trade = items.find((trade: Trade) => trade.id === id);

  if (!trade) {
    return NOT_FOUND;
  }

  return trade;
});

export default getTradeById;
