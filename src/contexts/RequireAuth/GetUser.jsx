import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const GetUser = () => {

    const user = useContext(AuthContext);
    return user

};

export default GetUser;