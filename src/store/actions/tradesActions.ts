import { Message, Trade } from 'entries/trade';
import {
  GET_TRADES_REQUEST,
  GET_TRADES_SUCCESS,
  GET_TRADES_ERROR,
  DELETE_TRADES,
  CHANGE_TRADE_STATUS,
} from 'constants/actionTypes';
import delayForResponse from 'helper/delayForResponse';
import { TradesActionTypes } from 'store/interfaces/TradesActionTypes';

export type Args = {
  tradeId: number | string,
  message: Message,
  account: string,
  prevId?: string,
};

const getTradesRequest = (): TradesActionTypes => ({
  type: GET_TRADES_REQUEST,
});

const getTradesSuccess = (payload: Trade[]): TradesActionTypes => ({
  type: GET_TRADES_SUCCESS,
  payload,
});

const getTradesError = (payload: string): TradesActionTypes => ({
  type: GET_TRADES_ERROR,
  payload,
});

export const deleteTrade = (payload: string): TradesActionTypes => ({
  type: DELETE_TRADES,
  payload: { tradeId: payload },
});

export const changeTradeStatus = (payload: string): TradesActionTypes => ({
  type: CHANGE_TRADE_STATUS,
  payload: { tradeId: payload },
});

export const getTrades = (url: string) => async (dispatch: any) => {
  dispatch(getTradesRequest());

  await delayForResponse();

  const response = await fetch(url);

  if (!response.ok) return dispatch(getTradesError(response.statusText));

  const result: Array<Trade> = await response.json();

  return dispatch(getTradesSuccess(result));
};

export default getTrades;
