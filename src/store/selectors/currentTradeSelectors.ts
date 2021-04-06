import { createSelector } from 'reselect';

import { RootState } from 'store/reducers';

export const getCurrentTradeState = (state: RootState) => state.currentTrade;

export const getCurrentTrade = createSelector(
  getCurrentTradeState,
  (state) => state.item,
);
export const getCurrentTradeIsLoading = createSelector(
  getCurrentTradeState,
  (state) => state.isLoading,
);
