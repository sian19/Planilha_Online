import { useState, useContext, useEffect} from 'react';
import useLocalStorage from 'use-local-storage';
import './financas.css';

import {useDataContext} from '../../context/AuthProvider';
import {db} from '../../services/Firebase';
import {addDoc, collection, getDocs} from 'firebase/firestore';

import buttonRose from '../../assets/lixeira.png';
import buttonBlue from '../../assets/lixeira_blue.png';

import ModalDelet from '../modal_delete/ModalDelet';
import ModalEdit from '../modal_edit/ModalEdit';
import ButtonDellAll from './ButtonDelAll';

import {Input, Button, H3Mob, H3Desktop, Th, Td, ButtonEdit, Message, ValueTotal, MesContainer} from '../styled-components/components';

function Mes(){

    const {user, upload, addUpload, reverseString} = useContext(useDataContext);

    //Estado responsável por guardar os dados que o usuário tem em seu banco de dados//
    const [dats, setDats] = useState([]);
    //

     //Estados que guardam o mes que o usuário seleciona//
     const [month, setMonth] = useLocalStorage('save_month', 'Janeiro');

     useEffect(()=> {
         if(!month){
             setMonth('Janeiro');
         }
     },[])
     //
 

    const useCollectionRef = collection(db, `${user.id}/${user.id}/${month}`);

    //Estados que guardam os valores digitados pelo usuário//
    const [banco, setBanco] = useState('')
    const [conta, setConta] = useState('');
    const [valor, setValor] = useState(0);
    const [pagamento, setPagamento] = useState('');
    const [vencimento, setVencimento] = useState('');
    //

    //Estado de erro caso o usuário não digite nada nos campos necessários//
    const [error, setError] = useState(0);

    const [borderBanco, setBorderBanco] = useState('');
    const [borderConta, setBorderConta] = useState('');
    const [borderValor, setBorderValor] = useState('');
    const [borderVencimento, setBorderVencimento] = useState('');

    useEffect(()=>{

        setBorderBanco(error > 0 && !banco ? '1px solid red' : '0');
        setBorderConta(error > 0 && !conta ? '1px solid red' : '0');
        setBorderValor(error > 0 && !valor ? '1px solid red' : '0');
        setBorderVencimento(error > 0 && !vencimento ? '1px solid red' : '');

    },[error])

    //

   
    //Função que armazena os dados no firebase//
    const addData = async (banco, conta, valor, pagamento, vencimento)=> {
        pagamento = await reverseString(pagamento);
        vencimento = await reverseString(vencimento);
        valor = Number(valor);
        
        if(banco && conta && valor && vencimento){
            await addDoc(useCollectionRef, {
                banco,
                conta,
                valor,
                pagamento,
                vencimento
            })

            setError(0);
            addUpload();
            
        }

        else{
            //A cada vez que o usuário não digita nada nos campos e confirma, o estado recebe um valor que se for maior que zero ele não consegue registrar os dados//
            setError(error=> error + 1);
            //

        }
    }
    //

    //Toda vez que o usuário registrar algum dado no banco o código do bloco abaixo será executado//
    useEffect(()=> {
        const getDats = async () => {
            const data = await getDocs(useCollectionRef);
            setDats(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )))

            soma = 0

        }

        getDats();


    },[upload, month])
    //

    //Variável reponsável por somar as finanças do usuário//
    let soma = 0;
    //

    //Estado que altera se o modal está ativo ou não e o estado que pega o id que será deletado//
    const [modalDel, setModalDel] = useState(false);
    const [id, setId] = useState('');
    //

    //Estado que altera se o modal de editar vai aparecer ou não em tela//
    const [modalEdit, setModalEdit] = useState(false);
    const [datsEdit , setDatsEdit] = useState({});
    //

    //Estado usado para definir se o modal de deletar todos os dados de uma lista será exibido ou não//
    const [modalDelAll, setModalDelAll] = useState(false);
    //

    //Tema//
    const [inputTheme, setInputTheme] = useState(false);
    const {addTheme, theme} = useContext(useDataContext);

    useEffect(()=> {
       if(theme){
        setInputTheme(true);
       }

       else{
        setInputTheme(false);
       }

    },[theme, inputTheme])
    //

    return(
        <MesContainer modalDel={modalDel} modalEdit={modalEdit} modalDelAll={modalDelAll} inputTheme={inputTheme}>
            
            <div className='center'>
                <h2 style={{color: !theme ? 'var(--rose1)' : 'var(--blueQuen)'}}>Levantamento de {month}</h2>

                <h3 className='title-theme' style={{color: !theme ? 'var(--rose1)' : 'var(--blueQuen)'}}>Tema</h3>

                <div className='button-theme' onClick={()=> {

                    addTheme(null);

                }} style={{border: !theme ? '1px solid var(--rose1)' : '1px solid var(--blueSky)'}}>
                    <button style={{marginLeft: !theme ? '0' : '30px',
                backgroundColor: !theme ? 'var(--rose1)' : 'var(--blueSky)'}} onClick={(e)=> {
                    e.preventDefault();
                }}>{!theme ? 'F' : 'M'}</button>
                </div>

                <form>
                    <div className='inputs' style={{backgroundColor: !theme ? 'rgba(238, 177, 213, 0.5)' : 'rgba(114, 169, 247, 0.8)'}}>
                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Mês</h3>
                            <select value={month} name="mes" onChange={(e)=> {
                                setMonth(e.target.value);
                            }} style={{color: !theme ? 'var(--rose2)' : 'var(--blueSky)'}}>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Janeiro</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Fevereiro</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Março</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Abril</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Maio</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Junho</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Julho</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Agosto</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Outubro</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Novembro</option>
                                <option style={{backgroundColor: !theme ? 'var(--rose3)' : 'var(--blueQuen)'}}>Dezembro</option>
                            </select>
                        </div>
                        
                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Banco</h3>
                            <Input inputTheme={inputTheme} type="text" placeholder='banco' required onChange={(e)=> {

                                setBanco(e.target.value);

                            }} style={{border: borderBanco,
                            color:!theme ? 'var(--rose2)' : 'var(--blueSky)'}}/>
                        </div>

                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Conta</h3>
                            <Input inputTheme={inputTheme} type="text" placeholder='conta' required onChange={(e)=> {

                                setConta(e.target.value);

                            }} style={{border: borderConta, 
                                color:!theme ? 'var(--rose2)' : 'var(--blueSky)'}}/>
                        </div>

                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Valor</h3>
                            <Input inputTheme={inputTheme} type="number" min={0} placeholder='valor' required onChange={(e)=> {

                                setValor(e.target.value);

                            }} style={{border: borderValor, color:!theme ? 'var(--rose2)' : 'var(--blueSky)'}}/>
                        </div>

                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Data de vencimento</h3>
                            <Input inputTheme={inputTheme}  type="date" required onChange={(e)=> {

                                setVencimento(e.target.value);

                            }} style={{border: borderVencimento, color:!theme ? 'var(--rose2)' : 'var(--blueSky)'}}/>
                        </div>

                        <div className='box'>
                            <h3 style={{color : !theme ? 'var(--green)' : 'var(--blueQuen)'}}>Data de pagamento</h3>
                            <Input inputTheme={inputTheme} type="date" onChange={(e)=> {

                                setPagamento(e.target.value);

                            }} style={{color:!theme ? 'var(--rose2)' : 'var(--blueSky)'}}/>
                        </div>

                        <h3 className='erro' style={{display: error > 0 ? 'block' : 'none'}}>Os campos contornados de vermelho são obrigatórios</h3>


                        <div className='button'>
                            <Button inputTheme={inputTheme} onClick={(e)=> {
                                e.preventDefault();
                                addData(banco, conta, valor, pagamento, vencimento);

                            }}>Salvar</Button>
                        </div>

                    </div>

                </form>

                <H3Mob inputTheme={inputTheme} className='info-mob'>Abaixo role para a direita até chegar na coluna editar para alterar os dados ou exibir mais dados</H3Mob>

                <H3Desktop inputTheme={inputTheme} className='info-desktop'>Abaixo clique na coluna editar referente ao dado que você quer alterar</H3Desktop>

                <div className='table'>
                    <table>
                        <thead style={{backgroundColor: !theme ? 'var(--rose2)' : 'var(--blueSky)'}}>
                            <tr>
                                <Th inputTheme={inputTheme}>Banco</Th>
                                <Th inputTheme={inputTheme}>Conta</Th>
                                <Th inputTheme={inputTheme}>Valor</Th>
                                <Th inputTheme={inputTheme}>Vencimento</Th>
                                <Th inputTheme={inputTheme}>Pagamento</Th>
                                <Th inputTheme={inputTheme}>Editar</Th>
                            </tr>
                        </thead>
                         <tbody>
                            { 
                                dats.map((dat)=> {
                                    soma += dat.valor;
                                    return (
                                        <tr key={dat.id}>
                                            <Td inputTheme={inputTheme}>{dat.banco}</Td>
                                            <Td inputTheme={inputTheme}>{dat.conta}</Td>
                                            <Td inputTheme={inputTheme}>{`${dat.valor} R$`}</Td>
                                            <Td inputTheme={inputTheme}>{dat.vencimento}</Td>
                                            <Td inputTheme={inputTheme}>{dat.pagamento ? dat.pagamento : 'Ainda não pagou'}</Td>
                                            <ButtonEdit inputTheme={inputTheme}>

                                                <button onClick={(e) => {

                                                    e.preventDefault();
                                                    setModalDel(true);
                                                    setId(dat.id);

                                                }}><img src={!theme ? buttonRose  : buttonBlue } alt="delet"/></button>

                                                <button onClick={(e) => {

                                                    e.preventDefault();
                                                    setDatsEdit(dat);
                                                    setModalEdit(true);

                                                }}>Editar</button>

                                            </ButtonEdit>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Message inputTheme={inputTheme} dats={dats}>Não tem nada nesse mês</Message>
            <ValueTotal inputTheme ={inputTheme} dats={dats}> 
                <div className='container-total'>
                    <h2>Valor total</h2>
                    <h2>{`${soma} R$`}</h2>
                </div>
            </ValueTotal>

            <ModalDelet modal={modalDel} setModalDel={setModalDel} id={id} month={month} inputTheme={inputTheme}/>

            <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} datsEdit={datsEdit} month={month} inputTheme={inputTheme}/>

            <ButtonDellAll dats={dats} month={month} modalDelAll={modalDelAll} setModalDelAll={setModalDelAll} inputTheme={inputTheme}/>
        </MesContainer>

    );

}

export default Mes;