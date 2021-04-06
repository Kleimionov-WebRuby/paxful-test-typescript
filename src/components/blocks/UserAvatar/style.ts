import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  smallAvatar: {
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 5px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
}));
