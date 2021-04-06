import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  messageLoaderBlock: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 15,
    top: '50%',
    transform: 'translateY(-50%)',
    marginTop: -10,
    opacity: 0.4,

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
}));
