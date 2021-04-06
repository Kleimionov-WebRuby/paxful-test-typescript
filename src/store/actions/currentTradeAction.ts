import {
  SET_TRADE_REQUEST,
  SET_TRADE_SUCCESS,
  SET_TRADE_ERROR,
} from 'constants/actionTypes';
import { Args } from 'store/actions/tradesActions';
import { CurrentTradeActionsType } from 'store/interfaces/currentTradeActionsType';
import { Trade } from 'entries/trade';

const setTradeRequest = (
  payload: Pick<Args, 'tradeId' | 'prevId'>,
): CurrentTradeActionsType => ({
  type: SET_TRADE_REQUEST,
  payload,
});

const setTradeSuccess = (payload: Trade): CurrentTradeActionsType => ({
  type: SET_TRADE_SUCCESS,
  payload,
});

const setTradeError = (payload: string): CurrentTradeActionsType => ({
  type: SET_TRADE_ERROR,
  payload,
});

const setCurrentTrade = (trade: Trade, prevId: string) => (dispatch: any) => {
  dispatch(setTradeRequest({ tradeId: trade.id, prevId }));

  if (!trade) return dispatch(setTradeError('Missing "trade" variable'));

  return dispatch(setTradeSuccess(trade));
};

export default setCurrentTrade;
