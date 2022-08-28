import styled from 'styled-components';
import imgFemi from '../../assets/banner.jpg';
import imgMasc from '../../assets/1849806-ceu-azul-e-nuvens-grátis-foto.jpg';

export const Input = styled.input`

    &:focus {
        outline: none;
        box-shadow: ${({inputTheme}) => inputTheme ? '0 0 18px var(--blueQuen)': '0 0 18px var(--rose1)'};
    }

    ::placeholder{
        color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose2)'};
    }

    color: ${({inputTheme}) => !inputTheme ? 'var(--rose1)' : 'var(--blueSky)'};

`

export const Button = styled.button`
    &:hover{
        background-color: var(--green);
        color: ${({inputTheme}) => !inputTheme ? 'var(--rose1)' : 'var(--blueSky)'}; 
    }

    display: block;
    width: 120px;
    margin: auto;
    margin-top: 18px;
    border-radius: 20px;
    cursor: pointer;
    border: ${({theme}) => !theme ? '1px solid var(--rose1)' : 'var(--blueSky)'};
    background-color: ${({inputTheme}) => !inputTheme ? 'var(--rose1)' : '#6b9ab5'};
    color:  var(--green);
    transition: 0.6s;
    padding: 6px 0;
`

export const H3Mob = styled.h3`
    text-align: center;
    margin: auto;
    margin-top: 20px;
    color: ${({inputTheme}) => !inputTheme ? 'var(--rose1)' : 'var(--blueSky)'};
    display: none;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    max-width: 400px;

    @media(max-width: 550px){
            font-size: 0.72rem;
            display: block;
    }
`

export const H3Desktop = styled.h3`
    text-align: center;
    margin: auto;
    margin-top: 20px;
    color: ${({inputTheme}) => !inputTheme ? 'var(--rose1)' : 'var(--blueQuen)'};
    display: block;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    font-size: 0.98rem;
    max-width: 650px;

    @media(max-width: 550px){
        font-size: 0.85rem;
        display: none;
    }
`

export const Th = styled.th`
    width: 17.5%;
    border: ${({inputTheme}) => inputTheme ? '1px solid var(--blueQuen)' : '1px solid var(--rose1)'};
    padding: 5px 1px;
    word-break: break-all;
`

export const Td = styled.td`
    border: ${({inputTheme}) => inputTheme ? '1px solid var(--blueQuen)' : '1px solid var(--rose1)'};
    padding: 5px 1px;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
    word-break: break-all;
    display: flex;
    transition: 0.6s;
    justify-content: center;
    width: 17.5%;
` 

export const ButtonEdit = styled.td`
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: ${({inputTheme}) => inputTheme ? '1px solid var(--blueQuen)' : '1px solid var(--rose1)'};
    word-break: break-all;
    width: 17.5%;

    button{
        color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
        cursor: pointer;
        transition: 0.7s;
        font-size: 0.85rem;
        border-radius: 8px;
    }

    button:first-child{
        width: 15px;
        height: 15px;
    }

    button:first-child:hover{
        transition: 0.4s;
        transform: scale(1.5, 1.5);
    }

    button:last-child:hover{
        color: var(--green);
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
        padding: 2.2px;
    }

    button img{
        width: 100%;
        height: 100%;
    }

    @media(max-width: 550px){
        button{
            font-size: 0.65rem;
        }

        button:first-child{
            width: 12px;
            height: 12px;
        }
    }
`

export const Message = styled.h2`
    text-align: center;
    padding-top: 18px;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
    font-size: 1.3rem;
    display: ${({dats}) => dats.length == 0 ? 'block' : 'none'};

    @media(max-width: 550px){
        font-size: 1rem;
    }
`

export const ValueTotal = styled.div`
    max-width: 900px;
    margin: auto;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
    padding-top: 10px;
    display: ${({dats}) => dats.length == 0 ? 'none' : 'block'};
`

export const DivButtonDel = styled.div`
    max-width: 900px;
    margin: auto;
`

export const ButtonDelete = styled.button`
    display: block;
    margin-top: 10px;
    width: 110px;
    padding: 5px 0;
    border-radius: 12px;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    cursor: pointer;
    font-size: 0.80rem;
    transition: 0.6s;

    &:hover{
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
        color: var(--green);
    }

    @media(max-width: 550px){
        width: 85px;
        border-radius: 15px;
        font-size: 0.66rem;
    }
`

export const ContainerModAll = styled.div`
    background: ${({inputTheme}) => inputTheme ? 'linear-gradient(to left, #4aaaf7, var(--blueSky))' : 'linear-gradient(to left, var(--rose1), var(--rose3))'};
    border-radius: 12px;

    button{
        color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    }

    button:hover{
        background-color: ${({inputTheme}) => inputTheme ? '#3f92d4' : 'var(--rose1)'};
        color: var(--green);
    }
`

export const ButtonFace = styled.button`
    font-size: 0.95rem;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: auto;
    padding-right: 12px;
    transition: 0.6s;
    width: 130px;
    gap: 5px;

    &:hover{
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
        color: var(--green);
    }
`

export const ButtonGoo = styled.button`
    font-size: 0.95rem;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: auto;
    padding-right: 12px;
    transition: 0.6s;
    width: 130px;
    gap: 5px;

    &:hover{
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
        color: var(--green);
    }
`

export const ButtonsTheme = styled.div`
    h3{
        font-size: 1rem;
        color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
        text-align: center;
    }

    div{
        text-align: center;
        padding: 6px 0;
        padding-bottom: 12px;
    }

    button{
        border: ${({inputTheme}) => inputTheme ? '1px solid var(--blueQuen)' : '1px solid var(--rose1)'};
        padding: 2px;
        cursor: pointer;
        color: ${({inputTheme}) => inputTheme ? 'var(--blueQuen)' : 'var(--rose1)'};
        border-radius: 3px;
    }

    button:nth-of-type(2){
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'white'};
    }

    button:nth-of-type(1){
        background-color: ${({inputTheme}) => inputTheme ? 'white' : 'var(--rose3)'};
    }

    @media(max-width: 550px){
        h3{
            font-size: 0.80rem;
        }

        button{
            font-size: 0.66rem;
        }
    }
`
export const MesContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 62px 4%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: ${({modalDel, modalEdit, modalDelAll}) => modalDel || modalEdit || modalDelAll ? 'relative' : 'initial'};
    background-image: ${({inputTheme}) => inputTheme ? `url(${imgMasc})` : `url(${imgFemi})`};
`

export const InputEdit = styled.input`
    outline: 0;
    padding: 4px 4px;
    border-radius: 8px;
    font-size: 0.92rem;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose2)'};
    margin-top: 5px;
    width: 100%;
    max-width: 230px;

    &:focus{
        box-shadow: ${({inputTheme}) => inputTheme ? '0 0 15px #3f92d4' : '0 0 15px var(--rose1)'};
    }

    &::placeholder{
        color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    }

`

export const ButtonSave = styled.button`
    display: block;
    width: 65px;
    border-radius: 12px;
    padding: 4px 0;
    margin-top: 12px;
    cursor: pointer;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    transition: 0.6s;

    &:hover{
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose2)'};
        color: var(--green);
    }
`

export const ButtonModalDel = styled.button`
    padding: 6px;
    border-radius: 8px;
    color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
    cursor: pointer;
    transition: 0.6s;

    &:hover{
        background-color: ${({inputTheme}) => inputTheme ? 'var(--blueSky)' : 'var(--rose1)'};
        color: var(--green);
    }
`