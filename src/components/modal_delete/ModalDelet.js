import React, {useContext} from 'react';
import './modal-delet.css';
import imgClosedRose from '../../assets/closed.png';
import imgClosedBlue from '../../assets/x.png';

import {db} from '../../services/Firebase';
import {deleteDoc, doc} from 'firebase/firestore';

import {useDataContext} from '../../context/AuthProvider';

import {ButtonModalDel} from '../styled-components/components';

function ModalDelet({modal, setModalDel, id, month, inputTheme}){

    //Função que deleta os dados//
    const {user, addUpload} = useContext(useDataContext);

    const deletData = async () => {
        await deleteDoc(doc(db, `${user.id}/${user.id}/${month}`, id))
    }
    //


    return(
        <div className='modal-delet' style={{display: modal ? 'flex' : 'none'}}>
            <div className='container-modal-delet' style={{background: inputTheme ? 'linear-gradient(to left, var(--blueSky), var(--blueQuen)' : 'linear-gradient(to left, var(--rose1), var(--rose3))'}}>

                <header style={{color:inputTheme ? 'var(--blueSky)' : 'var(--rose1)'}}>
                    <h4>Planilha online</h4>
                    <div className='closed-img'onClick={() => {
                        setModalDel(false);
                    }} >{inputTheme ? <img src={imgClosedBlue} alt="closed" /> : <img src={imgClosedRose} alt='closed'/>}</div>
                </header>

                <h3>Tem certeza que deseja apagar esses dados?</h3>

                <div className='buttons'>
                    <ButtonModalDel inputTheme={inputTheme} onClick={() => {

                        deletData();
                        addUpload();
                        setModalDel(false);

                    }}>Sim</ButtonModalDel>

                    <ButtonModalDel inputTheme={inputTheme} onClick={() => {
                        setModalDel(false);
                    }}>Não</ButtonModalDel>
                </div>
                
            </div>
        </div>
    );
}

export default ModalDelet;