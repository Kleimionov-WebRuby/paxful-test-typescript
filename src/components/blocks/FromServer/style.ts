import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  error: {
    color: '#c2485d',
  },

  disclaimer: {
    marginBottom: 20,
    fontSize: 12,
    lineHeight: '16px',
  },

  serverInfoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },

  serverInfoLoader: {
    color: '#a6a6a6',
    height: 232,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    '& img': {
      maxWidth: 100,
      maxHeight: 100,
      opacity: 0.5,
      display: 'block',
      margin: '0 auto 20px',
    },
  },
}));
