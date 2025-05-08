import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { Login } = use(AuthContext)
    const [error, setError] = useState();
    const location = useLocation();
    const Navigate = useNavigate();
    // console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                Navigate(`${location.state ? location.state : "/"}`);

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage);
                setError(errorCode);
            });


    }

    return (
        <div className='flex items-center justify-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-center mt-8 text-2xl'>Login your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* passsword  */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-400'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center py-3'>Dont’t Have An Account ? <Link to="/auth/Register" className='text-red-500'>Register</Link> </p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Login; <h1>Login pages</h1>