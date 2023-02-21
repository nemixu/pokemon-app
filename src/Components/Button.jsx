import React from 'react';

function Button({ label, handleClick, isDisabled, className }) {
	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			disabled={isDisabled}>
			{label}
		</button>		
	);
}

export default Button;
