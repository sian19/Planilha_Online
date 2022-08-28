import React, { useState } from 'react';
import './header.css';

import { useDataContext } from '../../context/AuthProvider';

import Nav from '../nav/Nav';
import { useContext } from 'react';

function Header(){

    const {authenticated} = useContext(useDataContext); 

     //Tema//
     const {theme} = useContext(useDataContext);
     //

    return(
        <header style={{backgroundColor: theme ? 'var(--blueQuen)' : 'var(--rose2)'}}>
            <div className='center'>
                <div className='logo' style={{margin: authenticated ? '0' : 'auto'}}><h2 style={{color: theme ? 'var(--blueSky)' : 'var(--green)'}}>Planilha</h2></div>

                <Nav/>
            </div>
        </header>
    )
}

export default Header;