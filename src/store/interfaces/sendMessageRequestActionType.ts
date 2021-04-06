import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  CHANGE_STATUS_ONREAD,
} from 'constants/actionTypes';
import { Args } from 'store/actions/tradesActions';

export interface SendMessageRequest {
  type: typeof SEND_MESSAGE_REQUEST;
}

export interface SendMessageSuccess {
  type: typeof SEND_MESSAGE_SUCCESS;
  payload: Args;
}

export interface SendMessageError {
  type: typeof SEND_MESSAGE_ERROR;
  payload: string;
}

export interface ChangeMessageStatusOnRead {
  type: typeof CHANGE_STATUS_ONREAD;
  payload: { tradeId: string, account: string };
}

export type SendMessageRequestActionType =
  | SendMessageRequest
  | SendMessageSuccess
  | SendMessageError
  | ChangeMessageStatusOnRead;
