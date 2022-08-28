import React,{useContext}  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import { useDataContext } from './context/AuthProvider';

import Header from './components/header/Header';
import Financas from './components/financas/financas';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function Planilha(){

    const {authenticated} = useContext(useDataContext);

    const Private = ({children})=> {
        if(!authenticated){
            return <Navigate to="/home" />
        }

        
        return children;
    
            
    }   

    return(
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>

                    <Route exact path='/home' element={<Home/>}/>

                    <Route exact path='/financas' element={<Private><Financas /></Private>}/>

                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default Planilha;