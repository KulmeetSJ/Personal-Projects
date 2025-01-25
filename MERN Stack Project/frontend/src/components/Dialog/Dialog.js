import React, { useRef, useEffect } from 'react';
import $ from 'jquery';

function Dialog({ model, zIndex, noBg, backgroundColor, children }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (model) {
            hideScreen();
        } else {
            showScreen();
        }
    }, [model]);

    const hideScreen = () => {
        $(modalRef.current).fadeIn(200);
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    };

    const showScreen = () => {
        $(modalRef.current).fadeOut(200);
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
    };

    return (
        <div>
            <div
                ref={modalRef}
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    zIndex: zIndex ? zIndex : 20,
                    width: '100vw',
                    backgroundColor: noBg ? '' : (backgroundColor ? backgroundColor : 'rgba(0, 0, 0, 0.5)'),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        backgroundColor: noBg ? '' : 'white',
                        borderRadius: '20px',
                        padding: '20px',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Dialog;
