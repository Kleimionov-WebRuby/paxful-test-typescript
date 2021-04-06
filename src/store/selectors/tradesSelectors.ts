import { createSelector } from 'reselect';

import { RootState } from 'store/reducers';

export const getTradesState = (state: RootState) => state.trades;
