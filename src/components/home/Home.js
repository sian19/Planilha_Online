import React,{useContext, useState, useEffect} from 'react';
import './home.css';
import imgFace from '../../assets/facebook.png';
import imgGoogle from '../../assets/google.png';
import {signInWithPopup, FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../../services/Firebase';
import { useDataContext } from '../../context/AuthProvider';

import {useNavigate} from 'react-router-dom';

import {ButtonFace, ButtonGoo, ButtonsTheme} from '../styled-components/components';

const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

function Login(){
    const navigate = useNavigate();

    const {addAuth,addUser, authenticated, addSelector, theme, addTheme} = useContext(useDataContext);

    //Estado do tema//
    const [inputTheme, setInputTheme] = useState(false);
    //

    useEffect(()=> {
        if(theme){
            setInputTheme(true);
        }

        else{
            setInputTheme(false);
        }
    },[theme]);

    const signWithFace = async (provider, e)=> {
        e.preventDefault();
        await signInWithPopup(auth, provider)
        .then((response)=> {
            
            if(!response){
                alert('Nenhuma conta foi encontrada');
            }

            else{
                addAuth();
                addUser({name: response.user.displayName,
                    image: response.user.photoURL,
                    id: response.user.providerData[0].uid});
                navigate('/financas');
                addSelector(1);
            }

        })

        .catch((err)=> {
            console.log(err.menssage);
        })
        
    }

    if(!authenticated){
         return(
            <div className='login' style={{background: theme ? 'linear-gradient(#4aaaf7, var(--blueSky), var(--blueQuen))': 'linear-gradient( var(--rose1), var(--rose2), var(--rose3))'}}>
                <h2>Planilha online</h2>

                <ButtonsTheme inputTheme={inputTheme}>
                    <h3>Escolha um tema de sua preferência</h3>

                    <div>
                        <button onClick={(e)=> {

                            e.preventDefault();
                            setInputTheme(false);
                            addTheme(false);

                        }}>Feminino</button>

                        <button onClick={(e)=> {

                            e.preventDefault();
                            setInputTheme(true);
                            addTheme(true);

                        }}>Masculino</button>
                    </div>

                </ButtonsTheme>

                <form className='form'>
                    <h2 style={{color: theme ? 'var(--blueQuen)' : 'var(--rose1)'}}>Escolha uma forma de logar abaixo</h2>
                    <ButtonFace inputTheme={inputTheme} onClick={(e) => { signWithFace(facebookProvider, e)}}><img src={imgFace}/>Facebook</ButtonFace>

                    <ButtonGoo inputTheme={inputTheme} onClick={(e) => { signWithFace(googleProvider, e)}}><img src={imgGoogle}/>Google</ButtonGoo>
                </form>
            </div>
        );
    }

    else{
        return(
            <div className='home' style={{paddingTop: authenticated ? '110px' : '80px', background: theme ? 'linear-gradient(#4aaaf7, var(--blueSky), var(--blueQuen))': 'linear-gradient( var(--rose1), var(--rose2), var(--rose3))' }}>
                <h2>Planilha online</h2>
                <p>Você pode usar a planilha para colocar seus dados mensais como banco, conta, valor da fatura, data que foi pago e data de vencimento. E ainda por cima você tem o valor total somado pra você no final da lista, legal né?</p>
                <p>Tudo isso para você ter o controle de todo o seu gasto durante o ano.</p>
            </div>
        );
    }
}

export default Login;