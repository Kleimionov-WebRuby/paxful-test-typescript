import { combineReducers } from 'redux';
import trades from './tradeReducer';
import account from './accountReducer';
import currentTrade from './currentTradeReducer';

export const rootReducer = combineReducers({
  trades,
  account,
  currentTrade,
});

export type RootState = ReturnType<typeof rootReducer>;
