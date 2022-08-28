import React from 'react';

import ModalDelAll from './ModalDellAll';

import {DivButtonDel, ButtonDelete} from '../styled-components/components';

function ButtonDellAll({dats, month, modalDelAll, setModalDelAll, inputTheme}){

    return(
        <>
            <DivButtonDel  className='button-delet-all' style={{display: dats.length > 1 ? 'block' : 'none'}}>
                <ButtonDelete inputTheme={inputTheme} onClick={(e) => {

                    e.preventDefault();
                    setModalDelAll(true);

                }}>Deletar todos</ButtonDelete>

            </DivButtonDel>

            <ModalDelAll dats={dats} month={month} modalDelAll={modalDelAll} setModalDelAll={setModalDelAll} inputTheme={inputTheme}/>
        </>
        
    );
}

export default ButtonDellAll;