import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  tradesDialogsWrap: {
    display: 'flex',
    height: '100vh',
    background: '#f6f7fb',

    '@media (max-width: 1279px)': {
      '&': {
        height: 'calc(100% - 48px)',
        display: 'block',
      },
    },
  },

  tradesDialogsItems: {
    width: '35%',
  },
  tradesDialogsDetails: {
    padding: 25,
    width: '50%',
  },

  shadowBlock: {
    backgroundColor: '#fff',
    boxShadow: '1px 0px 20px 1px #e8e8e8',
    maxWidth: '400px',
  },

  tradesDialogsMassageWrap: {
    padding: '0 35px 0',
    width: '100%',

    '@media (max-width: 576px)': {
      '&': {
        padding: '0 10px 0',
      },
    },
  },
}));
