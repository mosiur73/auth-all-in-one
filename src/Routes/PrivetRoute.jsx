import React, { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user}=useState(AuthContext)
    if(user){
        return children
    }
    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoute;