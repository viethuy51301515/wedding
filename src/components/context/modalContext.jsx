import React,{useContext,createContext, useState} from 'react';
import { ModalConstant } from './ModalConstant';

const ModalContext = createContext('modal');

const ModalProvider = ({children})=>{
    const [isShow,setIsShow] = useState(false);
    const [modalId,setModalId] = useState(""); 
    const showModal = (modalId)=>{
        setIsShow(true);
        setModalId(modalId);
    }
    const hideModal = () =>{
        setIsShow(false);
        setModalId(0);
    }

    return <ModalContext.Provider value={{isShow,modalId,showModal,
        hideModal}}>
        {children}
    </ModalContext.Provider>
}
const useModalContext = ()  => useContext(ModalContext);

export {useModalContext, ModalProvider}

