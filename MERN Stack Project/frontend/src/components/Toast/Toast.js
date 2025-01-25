import React, { useRef, useEffect } from 'react';
import $ from 'jquery';

function Toast({ model, zIndex, backgroundColor, message }) {
    const toastRef = useRef(null);

    useEffect(() => {
        if (model) {
            hideScreen();
        } else {
            showScreen();
        }
    }, [model]);

    const hideScreen = () => {
        $(toastRef.current).fadeIn(200);
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    };

    const showScreen = () => {
        $(toastRef.current).fadeOut(200);
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
    };

    return (
        <div>
            <div
                ref={toastRef}
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    zIndex: zIndex ? zIndex : 20,
                    backgroundColor: backgroundColor ? backgroundColor : '#30D158',
                    width: 'fit-content',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '20px 30px',
                }}
            >
                {message}
            </div>
        </div>
    );
}

export default Toast;
