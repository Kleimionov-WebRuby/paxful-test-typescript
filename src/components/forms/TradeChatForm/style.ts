import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  tradeChatInputWrap: {
    position: 'sticky',
    bottom: 0,
    paddingBottom: 20,
    backgroundColor: '#f6f7fb',
    width: '100%',
    zIndex: 2,
    marginTop: 70,
  },

  tradeChatSubmit: {
    textTransform: 'uppercase',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#52d48c',
    cursor: 'pointer',
    fontWeight: 700,
    position: 'absolute',
    right: 40,
    top: '50%',
    transform: 'translateY(-50%)',
    marginTop: -10,
    padding: '10px 20px',

    '&:hover': {
      color: '#5abd87',
    },
  },
}));
