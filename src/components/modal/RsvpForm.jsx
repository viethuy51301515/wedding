import React from 'react';
import {useForm,Controller} from 'react-hook-form';
import { FormWrapper, InputStyled, RsvpContainer } from './Modal.styled';
const RsvpForm = () =>{
    const {register,handleSubmit,setValue} =  useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
    return <RsvpContainer>
        <h1>SAY YOU’LL BE THERE</h1>
        <p>Please let us know if you can make it by
<br />
July 10th at the latest, preesh!</p>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputStyled name='name' type={'text'} placeholder='YOUR NAME' {...register("name")} />
            <div>
                <span>
                    Can't Wait
                </span>    
                <span>
                    Can't Come
                </span>   
                <input name='isJoin' type={'checkbox'} {...register("isJoin")} />
            </div>
            <input name='isAccommodation' type={'checkbox'} {...register("isAccommodation")} />
            <input name='isDepartTransportation' type={'checkbox'} {...register("isDepartTransportation")} />
            <input name='isArrivalTransportation' type={'checkbox'} {...register("isArrivalTransportation")} />
        </FormWrapper>
    </RsvpContainer>
}

export default RsvpForm;