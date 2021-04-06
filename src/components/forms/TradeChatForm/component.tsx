import React from 'react';
import { useSelector } from 'react-redux';

import Input from 'components/controls/Input';
import SubmitPreloader from 'components/controls/SubmitPreloader';
import { tradesIsMessageSending } from 'store/selectors/tradesSelectors';

import './style.css';

type Props = {
  message: string,
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const TradeChatForm = ({
  message,
  handleFormSubmit,
  handleFieldChange,
}: Props) => {
  const isSendingMessage = useSelector(tradesIsMessageSending);

  return (
    <form className="trade-chat__input-wrap" onSubmit={handleFormSubmit}>
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
