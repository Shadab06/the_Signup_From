import React, { useState } from 'react';
import style from './home.module.css';
import { Redirect, Link } from 'react-router-dom';
import SuccessPage from './SuccessPage';

const Home = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const resetInput = () => {
        document.getElementById('myForm').reset();
    }

    const nameChange = (event) => {
        setFullName(event.target.value);
    }

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const numberChange = (event) => {
        setPhone(event.target.value);
    }

    const submitForm = (event) => {

        var x = document.forms["myForm"]["password"].value;
        var emailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/;

        if (fullName.length != "" && email.length != "" && x != "" && phone.length != "") {
            if (emailValid.test(email)) {
                if (phone.length >= 9 && phone.length <= 11) {
                    window.location.href = "http://localhost:3000/SuccessPage";
                }
                else {
                    alert('Enter valid phone number...');
                }
            }
            else {
                alert('Enter a valid email');
            }

        }
        else {
            alert('Complete all details...')
        }
    }

    return (
        <>
            <div className={style.upperportion}>
                <img id={style.upperportionimage} src="/images/upper-portion-image.jpg" />
            </div>
            <div className={style.maininput}>
                <img id={style.userimage} src="/images/user.png" />
                <form id="myForm">
                    <input className="inputs" id={style.name} type="text" placeholder="YOUR NAME" onChange={nameChange} name="fullname" />
                    <input className="inputs" id={style.email} type="email" placeholder="EMAIL" onChange={emailChange} name="email" />
                    <input className="inputs" id={style.password} type="password" placeholder="PASSWORD" onChange={passwordChange} name="password" />
                    <input className="inputs" id={style.phone} type="number" placeholder="PHONE" onChange={numberChange} name="phone" />
                </form>
                <button className={style.resetbutton} onClick={resetInput}>RESET</button>
                <button className={style.confirmbutton} onClick={submitForm}>
                        SUBMIT
                </button>
            </div>
        </>
    );
}

export default Home;