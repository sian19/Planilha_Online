import React, {useEffect, useContext, useState} from 'react';
import './nav.css';

import {useNavigate} from 'react-router-dom';

import { useDataContext } from '../../context/AuthProvider';

import {Link} from 'react-router-dom';

import img from '../../assets/google.png';

function Nav(){

    const {authenticated, user} = useContext(useDataContext); 

    const {removeData} = useContext(useDataContext);

    const navigate = useNavigate();

    const {selector, addSelector} = useContext(useDataContext);

    const [menu, setMenu] = useState(false);

     //Tema//
     const {theme} = useContext(useDataContext);
     //

    useEffect(()=>{
        if(!selector){
            addSelector(0);

        }
    },[])

    return(
        <div className='nav' style={{display: authenticated ? 'flex' : 'none'}}>

            <nav className='menu mobile' style={{left: menu ? '0' : '-100%',
            backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>

                <div className='perfil mobile'>
                    <div className='foto'><img src={user && user.image ? user.image : img} /> </div>
                    <h3 style={{color: !theme ? 'var(--green)' : 'var(--blueSky)'}}>{user.name}</h3>
                </div>

                <ul>
                    <li><Link to="/home"  style={!theme ? {color: selector == 0 ? 'var(--green)' : '#551a8b'} : {color: selector == 0 ? 'var(--green)' : 'var(--blueSky)'}} onClick={()=> {

                        addSelector(0);

                    }}>Home</Link></li>

                    <li><Link to="/financas"  style={!theme ? {color: selector == 1 ? 'var(--green)' : '#551a8b'} : {color: selector == 1 ? 'var(--green)' : 'var(--blueSky)'}} onClick={()=> {

                        addSelector(1);

                    }}>Finanças</Link></li>

                    <li><a href='' style={!theme ? {color: '#551a8b'} : {color: 'var(--blueSky)'}} onClick={()=>{

                        navigate('/home');
                        setMenu(false);
                        removeData();

                    }}>Logout</a></li>
                </ul>
            </nav>

            <nav className='menu desktop'>
                <ul>
                    <li><Link to="/home" style={!theme ? {color: selector == 0 ? 'var(--green)' : '#551a8b'} : {color: selector == 0 ? 'var(--green)' : 'var(--blueSky)'}} onClick={()=> {

                        addSelector(0);

                    }}>Home</Link></li>

                    <li><Link to="/financas" style={!theme ? {color: selector == 1 ? 'var(--green)' : '#551a8b'} : {color: selector == 1 ? 'var(--green)' : 'var(--blueSky)'}} onClick={()=> {

                        addSelector(1);

                    }}>Finanças</Link></li>

                    <li><a style={!theme ? {color: '#551a8b'} : {color: 'var(--blueSky)'}} onClick={()=> {

                        navigate('/home');
                        setMenu(false);
                        removeData();

                    }}>Logout</a></li>
                </ul>
            </nav>

            <div className='perfil' style={{display: authenticated ? 'block' : 'none'}}>
                <div className='perfil desktop'>
                        <div className='foto'><img src={user ? user.image : ''} /> </div>
                        <h3 style={{color: !theme ? 'var(--green)' : 'var(--blueSky)'}}>{user.name}</h3>
                </div>
            </div>

            <div className='hambur'>
                    <input type="checkbox" id='check' onClick={()=>{
                        
                        setMenu(!menu)

                    }}/>
                    <label htmlFor="check">
                        <span style={{backgroundColor: !theme ? 'var(--rose1)' : 'var(--blueSky)'}}></span>
                        <span style={{backgroundColor: !theme ? 'var(--rose1)' : 'var(--blueSky)'}}></span>
                        <span style={{backgroundColor: !theme ? 'var(--rose1)' : 'var(--blueSky)'}}></span>
                    </label>
                </div>

        </div>
    );

}

export default Nav;