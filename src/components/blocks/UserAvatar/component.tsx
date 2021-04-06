import React from 'react';
import { useClasses } from './style';

type Props = {
  imageLink: string,
};

const UserAvatar = ({
  imageLink = 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
}: Props) => {
  const classes = useClasses();

  return (
    <div className={classes.smallAvatar}>
      <img src={imageLink} alt="" />
    </div>
  );
};

export default UserAvatar;
