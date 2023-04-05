import React from 'react';
import Header from '../components/Header';
import Main from '../pages/Main';

function Layout  ({children})  {
    return (
        <div>
            <Header/>
            <Main/>
            {children}
    
        </div>
    );
}

export default Layout;