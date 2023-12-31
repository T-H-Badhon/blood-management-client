import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <h1>Loading.......</h1>
    }
    if(user){
        return children
    }
};

export default PrivateRoute;