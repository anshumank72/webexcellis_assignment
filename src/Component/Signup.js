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
        <div className="member-container d-flex flex-wrap">
            <div className="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
                <div>
                    <div className="member-form-box">
                        <form>
                            <h1>Enter your email</h1>
                            <div className="form-box">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control " id="email" name='email' value={props.users.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div class="member-btn">
                                <a href="#!" className="btn btn-default btn-lg btn-block" onClick={handleClick}>Next</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;