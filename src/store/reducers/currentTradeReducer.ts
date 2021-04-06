import {
  SET_TRADE_REQUEST,
  SET_TRADE_SUCCESS,
  SET_TRADE_ERROR,
} from 'constants/actionTypes';
import { CurrentTradeState } from 'store/models/currentTradeModel';
import { CurrentTradeActionsType } from 'store/interfaces/currentTradeActionsType';
import { initialTrade } from 'constants/trade';

const initialState: CurrentTradeState = {
  item: initialTrade,
  isLoading: false,
  error: '',
};

const currentTrade = (
  state = initialState,
  action: CurrentTradeActionsType,
): CurrentTradeState => {
  switch (action.type) {
    case SET_TRADE_REQUEST: {
      return {
        ...state,
        isLoading: action.payload.tradeId !== action.payload.prevId && true,
      };
    }
    case SET_TRADE_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case SET_TRADE_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default currentTrade;
