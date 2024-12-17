import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const { sinInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        sinInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='m-4'>
            <div className='divider'>OR</div>
            
            <button
                onClick={handleGoogleSignIn}
                className='w-full border p-4'
            > <span className='flex items-center gap-2 justify-center'><FcGoogle /> Googl Log In</span></button>
                
               
        </div>
    );
};

export default SocialLogin;