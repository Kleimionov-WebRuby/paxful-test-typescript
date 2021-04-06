import React, { FC, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import setCurrentTrade from 'store/actions/currentTradeAction';
import { getTradesList } from 'store/selectors/tradesSelectors';
import { deleteTrade } from 'store/actions/tradesActions';
import { getCurrentTrade } from 'store/selectors/currentTradeSelectors';
import { Trade } from 'entries/trade';

import { useClasses } from './style';

const DialogDelete: FC = () => {
  const { push } = useHistory();
  const classes = useClasses();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const trades = useSelector(getTradesList);
  const currentTrade = useSelector(getCurrentTrade);

  const filteredTrades = trades.filter((item: Trade) => item.id !== id);

  const handleDeleteTrade = useCallback(() => {
    if (filteredTrades.length > 0) {
      dispatch(deleteTrade(id));
      dispatch(setCurrentTrade(filteredTrades[0], currentTrade.id));
      push(`/${filteredTrades[0].id}`);
    } else {
      alert('It`s the last element. You can`t delete it!');
    }
  }, [id, currentTrade.id, dispatch, filteredTrades, push]);

  return (
    <span
      role="button"
      className={classes.trashDialog}
      onClick={handleDeleteTrade}
    >
      <DeleteOutlineIcon className={classes.icon} />
    </span>
  );
};

export default DialogDelete;
