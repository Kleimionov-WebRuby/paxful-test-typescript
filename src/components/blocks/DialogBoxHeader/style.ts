import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  tradesDialogsHeader: {
    textAlign: 'center',
    borderBottom: '2px solid #e8e8e8',
    padding: '25px 0',
    position: 'sticky',
    top: 0,
    background: '#f6f7fb',
    zIndex: 2,
  },

  tradesDialogsHeaderTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: '#5e7392',
    lineHeight: '25px',
    marginBottom: 10,
  },

  tradesDialogsHeaderInfo: {
    display: 'flex',
    justifyContent: 'center',
  },

  tradesDialogsHeaderName: {
    marginRight: 10,
    color: '#8b8b8b',
    fontSize: 18,
  },
}));
