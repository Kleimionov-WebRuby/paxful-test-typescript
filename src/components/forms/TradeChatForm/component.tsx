import React from 'react';
import { useSelector } from 'react-redux';

import Input from 'components/controls/Input';
import SubmitPreloader from 'components/controls/SubmitPreloader';
import { tradesIsMessageSending } from 'store/selectors/tradesSelectors';

import { useClasses } from './style';

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
  const classes = useClasses();
  const isSendingMessage = useSelector(tradesIsMessageSending);

  return (
    <form className={classes.tradeChatInputWrap} onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name="message"
        value={message}
        placeholder="Type your message..."
        onInputChange={handleFieldChange}
      />
      <button type="submit" className={classes.tradeChatSubmit}>
        Send
      </button>
      {isSendingMessage && <SubmitPreloader />}
    </form>
  );
};

export default TradeChatForm;
