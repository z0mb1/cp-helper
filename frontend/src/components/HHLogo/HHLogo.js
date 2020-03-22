/* eslint-disable max-len */
import React from 'react';
import './HHLogo.css';


const HHLogo = ({
    size = 43,
}) => {

    return (
        <a href='http://hh.ru' className='hh-logo'>
            <svg width={size} height={size} viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0152588 21.7344V20.2656C0.402162 9.00783 9.65057 0 21.0027 0C32.6005 0 42.0027 9.40212 42.0027 21C42.0027 32.5979 32.6005 42 21.0027 42C9.65057 42 0.402162 32.9922 0.0152588 21.7344Z" fill="#C52929"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7398 18.2459V11.1027H8.36086V29.6115H11.7358L11.7398 23.0891C11.7358 21.9946 11.8387 21.1678 12.0453 20.6078C12.248 20.0487 12.569 19.6302 13.0147 19.3503C13.451 19.0729 13.9544 18.932 14.5134 18.932C15.0027 18.932 15.4078 19.0407 15.7331 19.2606C16.0576 19.4746 16.2833 19.7654 16.4116 20.135C16.5401 20.5023 16.601 21.3671 16.601 22.7325V29.6115H19.981V21.9732C19.981 20.8047 19.9232 19.9425 19.8071 19.3889C19.691 18.8322 19.4761 18.3276 19.1574 17.8662C18.8411 17.4101 18.3718 17.0338 17.7443 16.7406C17.1191 16.4449 16.4217 16.2967 15.6426 16.2967C14.1306 16.2967 12.8269 16.9498 11.7398 18.2459ZM25.0419 18.2459V11.1027H21.6664V29.6115H25.0419V23.0891C25.0419 21.9946 25.1448 21.1678 25.3475 20.6078C25.5535 20.0487 25.8754 19.6302 26.316 19.3503C26.7532 19.0729 27.2555 18.932 27.8148 18.932C28.3041 18.932 28.7125 19.0407 29.0344 19.2606C29.3606 19.4746 29.5855 19.7654 29.7138 20.135C29.8432 20.5023 29.9066 21.3671 29.9066 22.7325V29.6115H33.2821V21.9732C33.2821 20.8047 33.2246 19.9425 33.1084 19.3889C32.9932 18.8322 32.7775 18.3276 32.4587 17.8662C32.1433 17.4101 31.6739 17.0338 31.0496 16.7406C30.4221 16.4449 29.7205 16.2967 28.9448 16.2967C27.4328 16.2967 26.1299 16.9498 25.0419 18.2459Z" fill="white"/>
            </svg>
        </a>
    );
};

export default HHLogo;
