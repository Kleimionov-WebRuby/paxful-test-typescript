import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Input from 'components/controls/Input';
import SubmitPreloader from 'components/controls/SubmitPreloader';
import { RootState } from 'store/reducers';

import './style.css';

type Props = {
  message: string,
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const TradeChatForm = ({
  message,
  handleFormSubmit,
  handleFieldChange,
}: Props) => {
  const chatBottomRef = useRef<HTMLFormElement>(null);

  const isSendingMessage = useSelector(
    (state: RootState) => state.trades.isSendingMessage,
  );

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({
        behavior: 'auto',
      });
    }
  }, []);

  return (
    <form
      ref={chatBottomRef}
      className="trade-chat__input-wrap"
      onSubmit={handleFormSubmit}
    >
      <Input
        type="text"
        name="message"
        value={message}
        placeholder="Type your message..."
        onInputChange={handleFieldChange}
      />
      <button type="submit" className="trade-chat__submit">
        Send
      </button>
      {isSendingMessage && <SubmitPreloader />}
    </form>
  );
};

export default TradeChatForm;
