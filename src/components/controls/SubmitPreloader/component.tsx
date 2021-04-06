import React from 'react';

import { useClasses } from './style';

const SubmitPreloader = () => {
  const classes = useClasses();

  return (
    <div className={classes.messageLoaderBlock}>
      <img
        src="https://www.ulysse-nardin.com/pub/static/frontend/Isobar/ulysse_nardin/ru_RU/images/loader-spin.gif"
        alt="submit loader"
      />
    </div>
  );
};

export default SubmitPreloader;
