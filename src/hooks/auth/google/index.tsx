import React from 'react';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from './firebaseConfig';

/**
 * Google 로그인
 * @returns {JSX.Element}
 */
const GoogleLogin = () => {
    /**
     * Google로 로그인 처리
     * @returns {Promise<void>}
     */
    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const data = await signInWithPopup(auth, provider);
            console.log("User info:", data.user);
        } catch (error: any) {
            console.error("Google sign-in error:", error.message);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleSign}>구글로 로그인하기</button>
        </div>
    );
};

export default GoogleLogin;
