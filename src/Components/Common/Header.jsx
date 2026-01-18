import React from 'react';

const Header = ({children}) => {
    return (
        <div className='py-4 space-y-2'>
            {children}
        </div>
    );
};

export default Header;