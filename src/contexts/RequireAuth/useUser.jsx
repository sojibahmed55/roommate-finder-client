
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const useUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

export default useUser;