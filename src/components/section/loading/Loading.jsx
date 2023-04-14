import React from 'react';
import BarLoader from 'react-spinners/BarLoader'

const Loading = (...others) => {
  return (
    <BarLoader color="rgb(256, 0, 6)" width="100%" />
  );
};

export default Loading;