import React from 'react';

import StdHeader from '../components/StdHeader';
import StdFooter from '../components/StdFooter'; 
import StdHome from '../components/StdHome';

const StdHomePage = () => {
  return (
    <div>
      <StdHeader />
      <StdHome />
      <StdFooter />
    </div>
  );
}

export default StdHomePage;
