import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InvitationStyled } from './Information.styled';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const scriptUrl = "https://sheet.best/api/sheets/6800e2f4-7311-4b1b-9d83-7726d9c6825c"
const Invitation = () => {
    const { register, handleSubmit,reset} = useForm();
    const [show,setShow]= useState(false);
    const onSubmit = data => {
        setShow(true);

        fetch(scriptUrl, {method: 'POST',headers:{"Content-Type":"application/json"}, body: JSON.stringify(data)});
        reset();
    };
    return <InvitationStyled>
        <form onSubmit={handleSubmit(onSubmit)} style={{position:'relative'}}>
            <div className='form-fields'>
                <label htmlFor='name'>Full name*</label>
                <input id='name' type={"text"} {...register("name", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor='phone'>Phone number*</label>
                <input id='phone' type={"text"} {...register("phone", { required: true })} />
            </div>
            <div className='form-fields'>
                <label htmlFor="join"> Bạn sẽ tham dự lễ cưới tại Đà Lạt cùng tụi mình vào ngày 10/12/2022 chứ?*</label>
                <label className='sub-fields'>
                    <input id='join_yes' type="radio" {...register("join", { required: true })} value={"yes"}/>
                    <span class="checkmark"></span>
                    <label htmlFor='join_yes'>Chắn chắn không thể thiếu tui rồi</label>
                </label>
                <label className='sub-fields'>
                    <input id='join_no' type="radio" {...register("join", { required: true })} value={"no"} />
                    <span class="checkmark"></span>
                    <label htmlFor='join_no'>Xin lỗi! Tiếc là mình không thể tham dự rồi</label>
                </label>
                <label className='sub-fields'>
                    <input id='join_notsure' type="radio" {...register("join", { required: true })} value={"not sure"} /> 
                    <span class="checkmark"></span>
                    <label htmlFor='join_notsure'>Mình chưa chắc chắn, mình sẽ xác nhận lại trước deadline 20/11/2022 nha
                </label>  
                </label>
            </div>
            <div className='form-fields'>
                <label htmlFor="bus"> Bạn có muốn tụi mình sắp xếp hỗ trợ phương tiện di chuyển tới/ về Đà Lạt (Xe Thành Bưởi giường nằm cơ bản)*</label>
                <label className='sub-fields'>
                    <input id='bus_yes' type="radio" {...register("bus", { required: true })} value={"yes"}/>
                    <span class="checkmark"></span>
                    <label htmlFor='bus_yes'>Có, hãy book vé xe cho mình</label>
                </label>
                <label className='sub-fields'>
                    <input id='bus_no'  type="radio" {...register("bus", { required: true })} value={"no"} />
                    <span class="checkmark"></span>
                    <label htmlFor='bus_no'>Không, tui sẽ tự sắp xếp phương tiện di chuyển riêng</label>
                </label>
            </div>
            <div className='form-fields'>
                <label htmlFor="accommodation"> Bạn có muốn tụi mình sắp xếp nơi nghỉ ngơi cho bạn trong ngày diễn ra buổi tiệc (Địa điểm: Homestay Kenny House)*</label>
                <label className='sub-fields'>
                    <input id='accommodation_yes' type="radio" {...register("accommodation", { required: true })} value={"yes"}/>
                    <span class="checkmark"></span>
                    <label htmlFor='accommodation_yes'>Okela, mình cảm thấy thoải mái khi ở chung với nhiều người</label>
                </label>
                <label className='sub-fields'>
                    <input id='accommodation_no' type="radio" {...register("accommodation", { required: true })} value={"no"} />
                    <span class="checkmark"></span>
                    <label htmlFor='accommodation_no'>Hoiii, mình sẽ tự sắp xếp địa điểm nghỉ ngơi riêng nha</label>
                </label>
            </div>
            <div className='form-fields'>
                <label htmlFor='song'>Bài hát nào bạn muốn được "bay-lắc" trong tiệc?</label>
                <input id='song' type={"text"} {...register("song")} />
            </div>
            <div className='form-fields'>
                <label htmlFor='q&a'>Bạn có thắc mắc muốn hỏi riêng Thảo và Huy không?</label>
                <input id='q&a' type={"text"} {...register("q&a")} />
            </div>
            <input type="submit" />
            <ToastContainer position="bottom-end">
            <Toast delay={3000} bg='Light' show={show} autohide={true} onClose={() => setShow(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Yayyyyyy</strong>
                    </Toast.Header>
                    <Toast.Body>Cảm ơn bạn đã điền form nhé! </Toast.Body>
                </Toast>

            </ToastContainer>
        </form>

    </InvitationStyled>
}

export default Invitation;