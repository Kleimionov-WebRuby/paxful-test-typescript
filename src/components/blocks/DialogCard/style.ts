import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  tradesCard: {
    position: 'relative',
    padding: '25px 25px 25px 50px',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e2e2e2',
    transition: '.2s',
    backgroundColor: '#fff',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: 9,
      height: 9,
      borderRadius: '50%',
      left: 30,
      top: 30,
      border: '2px solid #aaa',
      backgroundColor: 'transparent',
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f6f7fb',
    },

    '&$active': {
      backgroundColor: '#f6f7fb',
      borderBottom: '1px solid #dcdcdc',
      borderLeft: 'none',
      borderRight: 'none',
      width: '100%',
      maxWidth: '100%',

      '& $tradesCardHowBuy': {
        color: '#5e7392',
      },
      '& $tradesCardPayMethod': {
        fontWeight: 400,
      },
    },

    '&$newMessage': {
      '&:before': {
        backgroundColor: '#57d4c8',
        border: 'none',
        width: 9,
        height: 9,
      },
    },
  },

  active: {},

  tradesCardHowBuy: {
    marginBottom: 10,
    color: '#acacac',
    fontSize: 14,
    fontWeight: 600,

    '& span': {
      fontWeight: 700,
    },
  },

  tradesCardPayMethod: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '22px',
    color: '#292929',
  },

  newMessage: {},

  tradesCardPurchaseRate: {
    fontSize: 14,
    color: '#989898',
  },
  tradesCardOwner: {
    textAlign: 'center',
    width: 70,
  },

  tradeStatus: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 12,
    color: '#a6a6a6',

    '&$paid': {
      color: '#53d48c',
      fontSize: 14,
    },
  },

  paid: {},

  '@media (max-width: 430px)': {
    tradesCard: {
      paddingLeft: 30,

      '&:before': {
        left: 12,
      },
    },
  },
}));
