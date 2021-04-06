import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrades } from 'store/actions/tradesActions';
import Hidden from '@material-ui/core/Hidden';
import 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { RootState } from 'store/reducers';
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

  const trades = useSelector((state: RootState) => state.trades.items);

  useEffect(() => {
    dispatch(getTrades(`http://localhost:3000/dialogsItems.json`));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Hidden lgUp>
        <MobileHeader />
      </Hidden>
      <div className="trades-dialogs-wrap">
        <Hidden mdDown>
          <ScrollBlock className="trades-dialogs__items">
            <DialogsList />
          </ScrollBlock>
        </Hidden>
        <Switch>
          {trades.length && (
            <Route exact path="/">
              <Redirect to={`/${trades[0].id}`} />
            </Route>
          )}
          <Route path="/:id">
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
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default TradesDialogs;
