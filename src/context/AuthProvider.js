import React,{createContext, useEffect, useState} from 'react';
import useLocalStorage from 'use-local-storage';
import useSessionStorage from 'use-session-storage';

export  const useDataContext = createContext();

export const AuthProvider = ({children})=>{

    //Estado e função que altera a cor dos botões de rota do site ao usuário navegar pela página//
    const [selector, setSelector] = useSessionStorage("saveSelector", 0);

    const addSelector = (value)=> {
        setSelector(value);
    }
    //

    //Estado que loga o usuário no site e guarda um valor pra saber se o usuário está logado//
    const [authenticated, setAuthenticated] = useLocalStorage("save_auth",false);

    useEffect(()=>{
        if(!authenticated){
            setAuthenticated(false);
        }
    },[])

    const addAuth = ()=> {
        setAuthenticated(true);
    }
    //

    //Estado e funçâo que guarda os dados do usuário//
    const [user, setUser] = useLocalStorage('save_user', {});

    useEffect(()=>{
        if(!user){
            setUser({name: '', image: null, id: ''});
        }
    },[])

    const addUser = (value)=>{
        
        let Name = JSON.stringify(value.name);
        let countName = Name.length;
        //Se o número de caracteres do nome for maior que 12 o if abaixo irá ser executado//
        if(countName > 12){
            let format = '';

            for(let i = 0; i < 7; i++){
                format += value.name[i];
                if(i == 6){
                    format += '...';
                }
            }

            value.name = format;
            setUser(value)
        }

        else{
            setUser(value);
        }

    }
    //

     //função pra inverter a data para o formato br//
     function reverseString(str){
        let date = str.split('-').reverse().join('');
        let formatDate = '';

        if(!str){
            return str;
        }

        else{
            for(let i = 0; i < date.length; i++){
                if(i == 1){
                    formatDate += date[i];
                    formatDate += '/';
                }

                else if(i == 3){
                    formatDate += date[i];
                    formatDate += '/';
                }

                else{
                    formatDate += date[i];
                }
            }

        }

        return formatDate;
    }
    //



    //Funçao que remove os dados do usuário do navegador após ele deslogar//
    function removeData(){
        setAuthenticated(false);
        setSelector(0);
        setUser({});
    }
    //

    //Estado e função responsável por ouvir se existe algum dado e se existe ele será carregado//
    const [upload, setUpload] = useState(false);

    const addUpload = async () => {
        await setUpload(!upload);
    }
    //

    //Estados e função para alteração do tema//
    const [colorTheme, setColorTheme] = useState('var(--rose2)');
    const [theme, setTheme] = useState(false);

    const addTheme = (e)=> {
        if(e == false){
            setTheme(false);
        }

        else if(e == null){
            setTheme(!theme);
        }

        else{
            setTheme(true);
        }
    }

    useEffect(()=>{
        let saveTheme = JSON.parse(localStorage.getItem('save_theme'));
        setTheme(saveTheme);
    },[])

    useEffect(()=> {
        localStorage.setItem('save_theme',JSON.stringify(theme));

        setColorTheme(!theme ? 'var(--rose2)' : 'var(--blueQuen)');
    },[theme]);
    //


    return(
        <useDataContext.Provider value={{authenticated, user, addUser, selector, addSelector, removeData, addAuth, upload, addUpload, reverseString, addTheme, theme, colorTheme}}>
            {children}
        </useDataContext.Provider>
    )
}