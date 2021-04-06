import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  btn: {
    marginBottom: 30,
    borderRadius: 30,
    cursor: 'pointer',
    transition: '.2s',
    padding: '12px 35px',
    fontSize: 18,
    letterSpacing: '0.04em',
    backgroundColor: '#52d48c',
    color: '#fff',
    border: '2px solid #5abd87',

    '&:hover': {
      backgroundColor: '#5abd87',
    },
  },
}));
