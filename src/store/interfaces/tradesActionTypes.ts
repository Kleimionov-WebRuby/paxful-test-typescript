import {
  GET_TRADES_REQUEST,
  GET_TRADES_SUCCESS,
  GET_TRADES_ERROR,
  DELETE_TRADES,
  CHANGE_TRADE_STATUS,
} from 'constants/actionTypes';
import { Trade } from 'entries/trade';

export interface GetTradesRequest {
  type: typeof GET_TRADES_REQUEST;
}

export interface GetTradesSuccess {
  type: typeof GET_TRADES_SUCCESS;
  payload: Trade[];
}

export interface GetTradesError {
  type: typeof GET_TRADES_ERROR;
  payload: string;
}

export interface DeleteTrade {
  type: typeof DELETE_TRADES;
  payload: { tradeId: string };
}

export interface ChangeTradeStatus {
  type: typeof CHANGE_TRADE_STATUS;
  payload: { tradeId: string };
}

export type TradesActionTypes =
  | GetTradesRequest
  | GetTradesSuccess
  | GetTradesError
  | DeleteTrade
  | ChangeTradeStatus;
