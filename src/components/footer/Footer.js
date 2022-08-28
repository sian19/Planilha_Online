import React,{useContext} from 'react';
import './footer.css';
import {useDataContext} from '../../context/AuthProvider';

function Footer(){
    const {theme} = useContext(useDataContext);

    return(
        <footer style={{backgroundColor: theme ? 'var(--blueSky)' : 'var(--rose1)'}}>
            <h3 style={{color: theme ? 'var(--blueQuen)' : 'var(--rose3)'}}>Planilha Online</h3>

            <p style={{color: theme ? 'var(--blueQuen)' : 'var(--rose3)'}}>SeanTaronDev</p>
        </footer>
    );
}

export default Footer;