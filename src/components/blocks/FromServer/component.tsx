import React, { FC } from 'react';
import { DataFromServer } from 'entries/dataFromServer';
import useGetInformation from 'api/hooks/information';

import { useClasses } from './style';

type Props = {
  data: DataFromServer,
};

const InfoBlock = ({
  name,
  value,
}: {
  name: string,
  value: string | number,
}) => {
  const classes = useClasses();
  return (
    <div className={classes.serverInfoRow}>
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};

const DataBlock: FC<Props> = ({ data }) => {
  const classes = useClasses();

  const {
    disclaimer,
    bpi: {
      USD: { code, rate, description, rate_float: rateFloat },
    },
  } = data;

  return (
    <div>
      <p className={classes.disclaimer}>{disclaimer}</p>
      <InfoBlock name="Code" value={code} />
      <InfoBlock name="Rate" value={rate} />
      <InfoBlock name="Description" value={description} />
      <InfoBlock name="Rate Float" value={rateFloat} />
    </div>
  );
};

const FromServer: FC = () => {
  const classes = useClasses();

  const { data, error } = useGetInformation(
    'https://api.coindesk.com/v1/bpi/currentprice/USD.json',
  );

  if (error)
    return (
      <div className={classes.error}>
        Sorry, but something went wrong. Please try later
      </div>
    );

  return (
    <div>
      {data ? (
        <DataBlock data={data} />
      ) : (
        <div className={classes.serverInfoLoader}>
          <img
            src="https://new.siemens.com/content/dam/internet/siemens-com/global/market-specific-solutions/cement-industry/sicement-process-newton-v04/app/sicement/images/preloader.gif"
            alt="loader"
          />
          Wait a minute. We are loading date...
        </div>
      )}
    </div>
  );
};

export default FromServer;
