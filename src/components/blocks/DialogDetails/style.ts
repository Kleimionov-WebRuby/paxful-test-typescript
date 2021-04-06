import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  tradesDialogsDetailsHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5e7392',

    '& span': {
      fontWeight: 600,
    },
  },

  tradesDialogsStartTime: {
    marginTop: 10,
    fontSize: 16,
    color: '#777',
    fontWeight: 400,
    marginBottom: 30,
  },

  tradesDialogsDetailsBody: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center',
    position: 'relative',
    marginTop: 20,

    '&:after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: 0,
      height: '100%',
      width: 1,
      backgroundColor: '#e2e2e2',
      transform: 'translateX(-50%)',
    },

    '& $smallAvatar img': {
      marginBottom: 5,
      boxShadow: '0 0 6px #bbbbbb',
    },
    '& $rating': {
      fontSize: 16,
    },
    '& li': {
      padding: 25,
      borderBottom: '1px solid #e2e2e2',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },

  tradeStatus: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 16,
    color: '#a6a6a6',

    '&$paid': {
      color: '#53d48c',
    },
  },

  tradesDialogsChangeUser: {
    textAlign: 'center',
    marginTop: 20,

    '& button': {
      padding: '10px 20px',
    },
  },

  informationFromServer: {
    textAlign: 'center',
    padding: '30px 25px',
  },

  paid: {},
  rating: {},
  smallAvatar: {},
}));
