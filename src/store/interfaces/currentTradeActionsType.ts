import {
  SET_TRADE_REQUEST,
  SET_TRADE_SUCCESS,
  SET_TRADE_ERROR,
} from 'constants/actionTypes';
import { Trade } from 'entries/trade';
import { Args } from 'store/actions/tradesActions';

export interface SetTradeRequest {
  type: typeof SET_TRADE_REQUEST;
  payload: Pick<Args, 'tradeId' | 'prevId'>;
}

export interface SetTradeSuccess {
  type: typeof SET_TRADE_SUCCESS;
  payload: Trade;
}

export interface SetTradeError {
  type: typeof SET_TRADE_ERROR;
  payload: string;
}

export type CurrentTradeActionsType =
  | SetTradeRequest
  | SetTradeSuccess
  | SetTradeError;
