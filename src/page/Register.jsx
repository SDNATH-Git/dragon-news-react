import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/")
                    })
                    .catch((error) => {
                        // console.log(error);
                        setUser(user);
                    });


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return (
        <div className='flex items-center justify-center '>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-center mt-8 text-2xl'>Register your account</h1>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name  */}
                        <label className="label">Name</label>
                        <input name='name' required type="text" className="input" placeholder="Name" />
                        {/* Photo  */}
                        <label className="label">Photo URL</label>
                        <input name='photo' required type="url" className="input" placeholder="Photo URL" />
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input name='email' required type="email" className="input" placeholder="Email" />
                        {/* Password  */}
                        <label className="label">Password</label>
                        <input name='password' required type="password" className="input" placeholder="Password" />


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center py-3'>Allready Have An Account ? <Link to="/auth/Login" className='text-red-500'>Login</Link> </p>
                    </fieldset>
                </form>

            </div>

        </div>
    );
};

export default Register; <h1>Register pages</h1>