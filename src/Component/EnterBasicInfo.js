import React from 'react';
import { useHistory } from 'react-router-dom';

const EnterBasicInfo = (props) => {

    const history = useHistory();

    const handleChange = (e) => {
        props.setUsers({
            ...props.users,
            [e.target.name]: e.target.value
        })
    }


    const handleClick = () => {
        console.log(props.users)
        const data = props.users
        fetch(`${props.baseUrl}api/users/signUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then(() => { history.push('/home') })

    }


    return (
        <div className="member-container d-flex flex-wrap">
            <div className="member-left d-lg-flex align-items-lg-center justify-content-lg-end">
                <div>
                    <div className="member-form-box">
                        <form>
                            <h1>Let's create your account</h1>
                            <div className="form-box">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control " id="email" name='email' value={props.users.email} onChange={handleChange} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">First name</label>
                                            <input type="text" className="form-control" id="firstname" name='firstName' value={props.users.firstName} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="lastname">Last name</label>
                                            <input type="text" className="form-control" id="lastname" name='lastName' value={props.users.lastName} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-intro-box d-flex align-items-center">
                                        <label for="password">Password</label>
                                        <a tabindex="0" className="help-popover ml-2" data-container="body" data-toggle="popover" data-placement="top" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing"><img src="include/images/help-circle.svg" alt="" /></a>

                                    </div>
                                    <div className="input-group">
                                        <input type="password" name="your_pass" id="password-field" className="form-control" name='password' value={props.users.password} onChange={handleChange} />
                                        <span>
                                            <i className="toggle-password" toggle="#password-field">
                                                <span className="show"><img src="include/images/eye.svg" alt="" /></span>
                                                <span className="hide"><img src="include/images/eye-off.svg" alt="" /></span>
                                            </i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="member-btn">
                                <a href="#!" class="btn btn-default btn-lg btn-block" onClick={handleClick}>Next</a>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EnterBasicInfo;

