import {
  GET_TRADES_REQUEST,
  GET_TRADES_SUCCESS,
  GET_TRADES_ERROR,
  DELETE_TRADES,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  CHANGE_STATUS_ONREAD,
  CHANGE_TRADE_STATUS,
} from '../../constants/actionTypes';
import { Trade } from 'entries/trade';
import { TradeState } from 'store/models';
import { TradesActionTypes } from 'store/interfaces/TradesActionTypes';
import { SendMessageRequestActionType } from 'store/interfaces/sendMessageRequestActionType';

type Action = TradesActionTypes | SendMessageRequestActionType;

const initialState: TradeState = {
  items: [],
  isLoading: false,
  errors: [],
  isSendingMessage: false,
};

const getTrade = (
  state: Trade[],
  tradeId: number | string,
): Trade | undefined => {
  return state.find((trade: Trade) => trade.id === tradeId);
};

const getTradeIndex = (state: Trade[], tradeId: number | string): number => {
  return state.findIndex((trade: Trade) => trade.id === tradeId);
};

const trades = (state = initialState, action: Action): TradeState => {
  switch (action.type) {
    case GET_TRADES_REQUEST:
      return { ...state, isLoading: true };
    case GET_TRADES_SUCCESS:
      return { ...state, items: action.payload, isLoading: false };
    case GET_TRADES_ERROR:
      return { ...state, errors: [action.payload], isLoading: false };
    case DELETE_TRADES:
      return {
        ...state,
        items: state.items.filter(
          (trade) => trade.id !== action.payload.tradeId,
        ),
      };
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        isSendingMessage: true,
      };
    case SEND_MESSAGE_SUCCESS: {
      const newTradesArray = [...state.items];
      const trade = getTrade(newTradesArray, action.payload.tradeId);
      const tradeIndex = getTradeIndex(newTradesArray, action.payload.tradeId);

      if (trade) {
        const newTrade = {
          ...trade,
          messages: [...trade.messages, action.payload.message],
          newMessage: {
            ...trade.newMessage,
            [action.payload.account]: true,
          },
        };

        newTradesArray.splice(tradeIndex, 1, newTrade);
      }

      return { ...state, items: newTradesArray, isSendingMessage: false };
    }
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        errors: [action.payload],
        isSendingMessage: false,
      };
    case CHANGE_STATUS_ONREAD: {
      const newTradesArray = [...state.items];
      const tradeOnRead = getTrade(newTradesArray, action.payload.tradeId);
      const tradeOnReadIndex = getTradeIndex(
        newTradesArray,
        action.payload.tradeId,
      );

      if (tradeOnRead) {
        const newTradeAfterOnRead = {
          ...tradeOnRead,
          newMessage: {
            ...tradeOnRead.newMessage,
            [action.payload.account]: false,
          },
        };

        newTradesArray.splice(tradeOnReadIndex, 1, newTradeAfterOnRead);
      }

      return { ...state, items: newTradesArray };
    }
    case CHANGE_TRADE_STATUS: {
      const newTradesArray = [...state.items];
      const tradeWithNewStatus = getTrade(
        newTradesArray,
        action.payload.tradeId,
      );
      const tradeWithNewStatusIndex = getTradeIndex(
        newTradesArray,
        action.payload.tradeId,
      );
      if (tradeWithNewStatus) {
        const newTradeAfterChangeStatus = {
          ...tradeWithNewStatus,
          isPaid: !tradeWithNewStatus.isPaid,
        };

        newTradesArray.splice(
          tradeWithNewStatusIndex,
          1,
          newTradeAfterChangeStatus,
        );
      }
      return { ...state, items: newTradesArray };
    }
    default:
      return state;
  }
};

export default trades;
