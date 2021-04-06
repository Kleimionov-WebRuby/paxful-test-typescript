import { createSelector } from 'reselect';

import { RootState } from 'store/reducers';

export const getAccountState = (state: RootState) => state.account;

export const getAccount = createSelector(getAccountState, (state) => state);
