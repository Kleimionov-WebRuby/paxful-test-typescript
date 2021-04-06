import React from 'react';

import './style.css';

const SubmitPreloader = () => {
  return (
    <div className="message-loader-block">
      <img
        src="https://www.ulysse-nardin.com/pub/static/frontend/Isobar/ulysse_nardin/ru_RU/images/loader-spin.gif"
        alt="submit loader"
      />
    </div>
  );
};

export default SubmitPreloader;
