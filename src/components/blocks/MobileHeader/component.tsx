import React, { useState } from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import { drawerWidth } from 'constants/index';
import DialogsList from 'components/blocks/DialogsList';
import DialogDetails from 'components/blocks/DialogDetails';

import './style.css';

type Anchor = 'left' | 'right';

const DrawerComponent = withStyles(() => ({
  paper: {
    width: drawerWidth,
  },
}))(Drawer);

const MobileHeader: React.FC = () => {
  const [state, setState] = useState({ left: false, right: false });

  const toggleDrawer = (anchor: Anchor, isDrawerOpen: boolean) => () => {
    setState({ ...state, [anchor]: isDrawerOpen });
  };

  return (
    <div className="mobile-header">
      <IconButton onClick={toggleDrawer('left', true)} className="">
        <MenuIcon />
      </IconButton>
      <DrawerComponent
        anchor="left"
        open={state.left}
        onClick={toggleDrawer('left', false)}
      >
        <DialogsList />
      </DrawerComponent>
      <IconButton onClick={toggleDrawer('right', true)} className="">
        <InfoIcon />
      </IconButton>

      <DrawerComponent
        anchor="right"
        open={state.right}
        onClick={toggleDrawer('right', false)}
      >
        <div className="trades-dialogs__details mobile">
          <DialogDetails />
        </div>
      </DrawerComponent>
    </div>
  );
};

export default MobileHeader;
