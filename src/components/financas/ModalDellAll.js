import React,{useContext} from 'react';
import './modal-del-all.css';
import imgClosedRose from '../../assets/closed.png';
import imgClosedBlue from '../../assets/x.png';

import {deleteDoc, doc} from 'firebase/firestore';

import {db} from '../../services/Firebase';

import {useDataContext} from '../../context/AuthProvider';

import {ContainerModAll} from '../styled-components/components';

function ModalDelAll({dats, month, modalDelAll, setModalDelAll, inputTheme}){

    const {user, addUpload} = useContext(useDataContext);

    const deletAll = async () => {
        for(let i = 0; i < dats.length; i++){
            await deleteDoc(doc(db, `${user.id}/${user.id}/${month}`, dats[i].id));
        }
        
        addUpload();
    }

    return(
        <div className='modal-del-all' style={{display: modalDelAll ? 'flex' : 'none', backgroundColor: inputTheme ? 'rgba(111, 175, 227, 0.6)' : 'rgba(238, 177, 213, 0.5)'}}>
            <ContainerModAll inputTheme={inputTheme} className='container-modal-del-all'>
            <header>
                <h4 style={{color: inputTheme ? 'var(--blueSky)' : 'var(--rose1)'}}>Planilha online</h4>
                <div className='closed-img'onClick={(e) => {

                    e.preventDefault();
                    setModalDelAll(false);

                }} ><img src={inputTheme ? imgClosedBlue : imgClosedRose} alt="closed" /></div>
            </header>

            <h3>Tem certeza que deseja zerar todo o mês de {month}?</h3>

                <div className='buttons'>
                    <button onClick={(e) => {

                        e.preventDefault();
                        deletAll();

                    }}>Sim</button>

                    <button onClick={(e) => {

                        e.preventDefault();
                        setModalDelAll(false);
                        
                    }}>Não</button>
                </div>
            </ContainerModAll>
        </div>
    );
}

export default ModalDelAll;
