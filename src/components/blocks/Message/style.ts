import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  messageBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 70,
    paddingLeft: 0,
    marginBottom: 30,

    '&$right': {
      flexDirection: 'row-reverse',
      paddingLeft: 70,
      paddingRight: 0,

      '& $messageBlockText': {
        backgroundColor: '#5c7393',
        color: '#fff',
        marginRight: 20,
        marginLeft: 0,
        lineHeight: '24px',

        '&:before': {
          clipPath: 'polygon(100% 50%, 0 0, 0 100%)',
          backgroundColor: '#5c7393',
          right: -10,
          left: 'auto',
        },
      },

      '& $messageBlockDate': {
        textAlign: 'right',
        marginLeft: 0,
        marginRight: 20,
      },
    },
  },
  right: {},

  messageBlockAvatar: {
    width: 50,
    height: 50,
    minWidth: 50,
    minHeight: 50,
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: -20,

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },

  messageBlockText: {
    fontWeight: 300,
    padding: '20px 30px',
    backgroundColor: '#fff',
    border: '2px solid #ecedef',
    borderRadius: 5,
    marginRight: 0,
    marginLeft: 20,
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: 10,
      height: 10,
      left: -8,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#fff',
      clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
      zIndex: 1,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 12,
      height: 12,
      left: -12,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#ecedef',
      clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
      zIndex: 0,
    },
  },

  messageBlockDate: {
    marginRight: 0,
    marginLeft: 20,
    fontSize: 14,
    color: '#b3b3b3',
    marginTop: 5,
  },

  '@media (max-width: 768px)': {
    messageBlock: {
      paddingRight: 0,
      alignItems: 'flex-start',

      '&$right': {
        paddingLeft: 0,
      },
    },

    messageBlockAvatar: {
      marginTop: 20,
    },

    messageBlockText: {
      '&:after': {
        top: 40,
      },
      '&:before': {
        top: 40,
      },
    },
  },
}));
