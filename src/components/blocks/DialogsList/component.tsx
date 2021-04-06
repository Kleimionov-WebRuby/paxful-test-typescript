import React, { FC, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTradesList } from 'store/selectors/tradesSelectors';
import { getCurrentTrade } from 'store/selectors/currentTradeSelectors';
import DialogCard from 'components/blocks/DialogCard';

const DialogsList: FC = () => {
  const trades = useSelector(getTradesList);
  const currentTrade = useSelector(getCurrentTrade);

  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    setSelected(currentTrade.id);
  }, [currentTrade]);

  const handleTradeChooseClick = useCallback(
    (itemId: string) => () => {
      setSelected(itemId);
    },
    [],
  );

  const renderItems = trades.map((item) => {
    const { id } = item;

    return (
      <Link key={id} to={`/${id}`} onClick={handleTradeChooseClick(id)}>
        <DialogCard
          item={item}
          key={id}
          isActive={id === selected ? 'active' : ''}
        />
      </Link>
    );
  });

  return <ul>{renderItems}</ul>;
};

export default DialogsList;
