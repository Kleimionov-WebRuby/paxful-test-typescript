import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  mobileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 25px',
    background: '#30364e',
  },
  tradesDialogsDetails: {
    padding: 25,
    width: '100%',
    boxShadow: 'none',

    '@media (max-width: 430px)': {
      '&': {
        padding: '25px 0px',
      },
    },
  },
  icon: {
    color: '#fff',
  },
}));
