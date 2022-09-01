import React from 'react';
import './modal-edit.css';

import imgClosedRose from '../../assets/closed.png';
import imgClosedBlue from '../../assets/x.png';
import { useState, useContext } from 'react';

import {updateDoc, doc} from 'firebase/firestore';
import {db} from '../../services/Firebase';

import {useDataContext} from '../../context/AuthProvider';

import {InputEdit, ButtonSave} from '../styled-components/components';

function ModalEdit({modalEdit, setModalEdit, datsEdit, month, inputTheme}){

    const {user, addUpload, reverseString} = useContext(useDataContext);

    const [banco, setBanco] = useState('');
    const [conta, setConta] = useState('');
    const [valor, setValor] =useState('');
    const [vencimento, setVencimento] = useState('');
    const [pagamento, setPagamento] = useState('');

    //Função que altera os dados//
    async function updateDats(){

        let formateVencimento = await reverseString(vencimento);
        let formatePagamento = await reverseString(pagamento);

        let formateValor = Number(valor);

        await updateDoc(doc(db, `${user.id}/${user.id}/${month}`, datsEdit.id), {
            banco: !banco ? datsEdit.banco : banco,
            conta: !conta ? datsEdit.conta : conta,
            valor: !valor ? datsEdit.valor : formateValor,
            vencimento: !formateVencimento ? datsEdit.vencimento : formateVencimento,
            pagamento: !formatePagamento ? datsEdit.pagamento : formatePagamento,
        })

    }
    //

    
    return(
        <div className='modal-edit' style={{display: modalEdit ? 'flex' : 'none', backgroundColor: inputTheme ? 'rgba(111, 175, 227, 0.6)' : 'rgba(238, 177, 213, 0.5)'}}>
            <div className='container-modal-edit' style={{background: inputTheme ? 'linear-gradient(to left, var(--blueSky), var(--blueQuen))' : 'linear-gradient(to left, var(--rose3), var(--rose1))'}}>

                <header style={{color: inputTheme ? 'var(--blueSky)' : 'var(--rose1)'}}>
                    <h4>Planilha online</h4>
                    <div className='closed-img'onClick={() => {

                        setModalEdit(false);

                    }} >{inputTheme ? <img src={imgClosedBlue} alt="closed" /> : <img src={imgClosedRose} alt='closed'/>}</div>
                </header>

                <form>
                    <h3>Banco</h3>
                    <InputEdit inputTheme={inputTheme} type="text" placeholder={datsEdit ? datsEdit.banco : ''}  onChange={(e)=>{
                        setBanco(e.target.value)
                    }}/>

                    <h3>Conta</h3>
                    <InputEdit inputTheme={inputTheme} type="text" placeholder={datsEdit ? datsEdit.conta : ''} onChange={(e)=> {
                        setConta(e.target.value);
                    }}/>

                    <h3>Valor</h3>
                    <InputEdit inputTheme={inputTheme} type="text" placeholder={datsEdit ? `${datsEdit.valor} R$` : ''} onChange={(e)=> {
                        setValor(e.target.value);
                    }}/>

                    <h3>Data de vencimento</h3>
                    <InputEdit inputTheme={inputTheme} type="text" placeholder={datsEdit.vencimento} onChange={(e)=> {
                        setVencimento(e.target.value);
                    }} onFocus={(e) => {
                        (e.target.type = 'date');
                    }} onBlur={(e)=> {

                        if(!vencimento){
                            (e.target.type = 'text');
                        }

                        else{
                            (e.target.placeholder = vencimento);
                        }

        
                    }}></InputEdit>

                    <h3>Data de pagamento</h3>
                    <InputEdit inputTheme={inputTheme} type="text" placeholder={datsEdit.pagamento ? datsEdit.pagamento : `Ainda não foi pago`} onChange={(e)=> {
                        setPagamento(e.target.value);
                    }} onFocus={(e)=>
                        (e.target.type = 'date')
                    } onBlur={(e) =>{ 

                        if(!pagamento){
                            (e.target.type = 'text');
                        }

                        else{
                            (e.target.placeholder = pagamento);
                        }
                    }
                    }/>

                    <ButtonSave inputTheme={inputTheme} onClick={(e)=> {

                        e.preventDefault();
                        updateDats();
                        setModalEdit(false);
                        addUpload();

                    }}>Salvar</ButtonSave>
                </form>
            </div>
        </div>
    );
}

export default ModalEdit;