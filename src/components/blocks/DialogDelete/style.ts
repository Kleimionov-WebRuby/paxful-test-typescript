import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  trashDialog: {
    width: 46,
    height: 46,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#b4bec8',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.2s',

    '&:hover': {
      backgroundColor: '#c2485d',
    },
  },
  icon: {
    color: '#fff',
  },
}));
