import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import setClientToken from '../hooks/setClientToken';

const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    const tokenResponse = setClientToken();
    if (tokenResponse !== null) setAuthToken(tokenResponse);
  }, []);

  return (
    <TokenContext.Provider value={{ authToken, setAuthToken }}>{children}</TokenContext.Provider>
  );
};

const useTokenContextValue = () => useContext(TokenContext);

export { TokenContext, TokenContextProvider, useTokenContextValue };

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
