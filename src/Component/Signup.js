import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    const history = useHistory();


    const handleChange = (e) => {
        props.setUsers({
            ...props.users,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        history.push('/infoform')
    }

    return (
        <div class="member-container d-flex flex-wrap">
            <div class="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
                <div>
                    <div class="member-form-box">
                        <form>
                            <h1>Enter your email</h1>
                            <div class="form-box">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control " id="email" name='email' value={props.users.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div class="member-btn">
                                <a href="#!" class="btn btn-default btn-lg btn-block" onClick={handleClick}>Next</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;