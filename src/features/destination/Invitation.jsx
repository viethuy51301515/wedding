import React from 'react';
import { useForm } from 'react-hook-form';
import { InvitationStyled } from './Information.styled';

const Invitation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return <InvitationStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-fields'>
                <label htmlFor='name'>Your full name*</label>
                <input type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>Phone number*</label>
                <input type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>Your lover's full name*</label>
                <input type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='name'>name</label>
                <input type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor="join"> Join</label>
                <input type="radio" {...register("join", { required: true })} checked value={"yes"}/>
                <input type="radio" {...register("join", { required: true })} value={"no"} />
            </div>
            <input type="submit" />
        </form>
    </InvitationStyled>
}

export default Invitation;