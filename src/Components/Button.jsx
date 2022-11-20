import React from 'react'


const Button = ({label, handleClick , isDisabled, className}) => {
    return(
    <button className={className}
    onClick={handleClick}
    disabled={isDisabled}
    >
    {label}
    </button>
    )
}


export default Button;
