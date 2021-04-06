import React, { FC } from 'react';

import { useClasses } from './style';

type Props = {
  rating: { good: number, bad: number },
};

const Rating: FC<Props> = ({ rating }) => {
  const classes = useClasses();

  const { good, bad } = rating;

  return (
    <div className={classes.rating}>
      <span className={classes.positive}>
        {good === 0 ? '' : '+'}
        {good}
      </span>{' '}
      /{' '}
      <span className={classes.negative}>
        {bad === 0 ? '' : '-'}
        {bad}
      </span>
    </div>
  );
};

export default Rating;
