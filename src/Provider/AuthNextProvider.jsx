'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const AuthNextProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
};

export default AuthNextProvider;