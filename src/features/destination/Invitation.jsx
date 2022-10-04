import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InvitationStyled } from './Information.styled';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const scriptUrl = "https://sheet.best/api/sheets/6800e2f4-7311-4b1b-9d83-7726d9c6825c"
const Invitation = () => {
    const { register, handleSubmit } = useForm();
    const [show,setShow]= useState(false);
    const onSubmit = data => {
        setShow(true);
        fetch(scriptUrl, {method: 'POST',headers:{"Content-Type":"application/json"}, body: JSON.stringify(data)})
    };
    return <InvitationStyled>
        <form onSubmit={handleSubmit(onSubmit)} style={{position:'relative'}}>
            <div className='form-fields'>
                <label htmlFor='name'>Your full name*</label>
                <input type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>Phone number*</label>
                <input type={"text"} {...register("phone", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>Your lover's full name*</label>
                <input type={"text"} {...register("name1", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>name</label>
                <input type={"text"} {...register("name2", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor="join"> Join</label>
                <input type="radio" {...register("join", { required: true })} checked value={"yes"}/>
                <input type="radio" {...register("join", { required: true })} value={"no"} />
            </div>
            <input type="submit" />
            <ToastContainer position="bottom-end">
            <Toast delay={3000} bg='Light' show={show} autohide={true} onClose={() => setShow(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Yayyyyyy</strong>
                    </Toast.Header>
                    <Toast.Body>Thanks for be a part of our party</Toast.Body>
                </Toast>

            </ToastContainer>
        </form>

    </InvitationStyled>
}

export default Invitation;