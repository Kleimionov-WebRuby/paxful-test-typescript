import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import 'simplebar/dist/simplebar.min.css';
import 'simplebar';

import { getTradesList } from 'store/selectors/tradesSelectors';
import { getTrades } from 'store/actions/tradesActions';
import {
  DialogsList,
  DialogBox,
  DialogDetails,
  ScrollBlock,
  TradeWrap,
  MobileHeader,
} from 'components/blocks';
import './style.css';

const TradesDialogs: React.FC = () => {
  const dispatch = useDispatch();

  const trades = useSelector(getTradesList);

  useEffect(() => {
    dispatch(getTrades(`${process.env.PUBLIC_URL}/dialogsItems.json`));
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      {trades.length && (
        <Route exact path="/">
          <Redirect to={`/${trades[0].id}`} />
        </Route>
      )}
      <Route path="/:id">
        <Layout />
      </Route>
    </Switch>
  );
};

export default TradesDialogs;

const Layout: React.FC = () => {
  return (
    <main className="trades-dialogs-wrap">
      <Hidden lgUp>
        <MobileHeader />
      </Hidden>
      <Hidden mdDown>
        <ScrollBlock className="trades-dialogs__items">
          <DialogsList />
        </ScrollBlock>
      </Hidden>
      <TradeWrap>
        <ScrollBlock className="trades-dialogs__massage-wrap">
          <DialogBox />
        </ScrollBlock>
        <Hidden mdDown>
          <ScrollBlock className="trades-dialogs__details">
            <DialogDetails />
          </ScrollBlock>
        </Hidden>
      </TradeWrap>
    </main>
  );
};
