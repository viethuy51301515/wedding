import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useModalContext } from '../context/modalContext';
import { ModalBackground, ModalStyled, ModalWrapper } from './Modal.styled';
import RsvpForm from './RsvpForm';
const Modal = () =>{
    const {modalId,isShow} = useModalContext();
    const ModalConstant = {
        REGISTER_PRE_WEDDING: RsvpForm,
        WEDDING:"WEDDING"
      };
      
    const ModalChild = ModalConstant[modalId];
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
     }, []);
     useEffect(() => {
        if(isShow){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }
     }, [isShow]);
    return ReactDOM.createPortal(
        isShow &&
        <ModalStyled>
            <ModalBackground position="fixed"/>
            <ModalWrapper>
                <img src='/close.png' alt='close' />

                <ModalChild />
            </ModalWrapper>
        </ModalStyled>,
        document.getElementById('modal-root'),
      );
}

export default Modal;