import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  rating: {
    fontWeight: 300,
    color: '#898989',
    fontSize: 20,

    '& span': {
      fontWeight: 600,
    },

    '& $positive': {
      color: '#53d48c',
    },
    '& $negative': {
      color: '#c2485d',
    },
  },

  positive: {},
  negative: {},
}));
