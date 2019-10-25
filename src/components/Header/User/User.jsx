import React, {Component} from 'react';
import s from './User.module.css';
import SignIn from "./Buttons/SignIn";
import SignUp from "./Buttons/SignUp";

const User = (props) => {
    return ( <div className={s.userContainer}> <SignUp /> <SignIn /> </div>
    );
};

export default User;