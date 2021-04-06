import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  CHANGE_STATUS_ONREAD,
} from 'constants/actionTypes';

import { Args } from 'store/actions/tradesActions';

import { SendMessageRequestActionType } from 'store/interfaces/sendMessageRequestActionType';

import delayForResponse from 'helper/delayForResponse';

const sendMessageRequest = (): SendMessageRequestActionType => ({
  type: SEND_MESSAGE_REQUEST,
});

const sendMessageSuccess = ({
  tradeId,
  message,
  account,
}: Args): SendMessageRequestActionType => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: { tradeId, message, account },
});

const sendMessageError = (payload: string): SendMessageRequestActionType => ({
  type: SEND_MESSAGE_ERROR,
  payload,
});

export const changeMessageStatusOnRead = (
  tradeId: string,
  account: string,
): SendMessageRequestActionType => ({
  type: CHANGE_STATUS_ONREAD,
  payload: { tradeId, account },
});

export const sendMessage = ({ tradeId, message, account }: Args) => async (
  dispatch: any,
) => {
  dispatch(sendMessageRequest());

  await delayForResponse(300);

  if (message && !message.text) {
    return dispatch(
      sendMessageError('Sorry, but something went wrong. Check you message'),
    );
  }
  return dispatch(sendMessageSuccess({ tradeId, message, account }));
};
