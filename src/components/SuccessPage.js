import React from 'react';
import style from './SuccessPage.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <>
            <div className={style.successpage}>
                <h1>Great...</h1>
                <h3>You are a valid user.</h3>
            </div>
            <div>
                <Link to="/" className={style.homebutton}>
                    <h3>Return</h3>
                </Link>
            </div>
        </>
    )
}
  
export default SuccessPage;