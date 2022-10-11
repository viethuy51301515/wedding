import React from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const ToastComponent = ({show,setShow,content}) =>{
    return           <ToastContainer position="bottom-end" style={{zIndex:100}}>
    <Toast delay={3000} bg='Light' show={show} autohide={true} onClose={() => setShow(false)}>
            <Toast.Header>
                <strong className="me-auto">Opppps</strong>
            </Toast.Header>
            <Toast.Body>{content}</Toast.Body>
        </Toast>
  
    </ToastContainer>
  }

  export default ToastComponent;