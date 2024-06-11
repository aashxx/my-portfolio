import React from 'react';
import CipherAnimation from './CipherAnimation';

const SplashScreen = () => {
    return (
        <main className='fixed top-0 bottom-0 left-0 right-0 h-screen bg-primary flex items-center justify-center z-[99]'>
            <CipherAnimation name={'Aashir.'} />
        </main>
    )
}

export default SplashScreen;