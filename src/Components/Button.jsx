import React, { useState } from 'react';

function Button({ label, isDisabled, className, handleClick }) {

	const [clicked, setClicked] = useState(0);

	const localHandleClick = () => {
		setClicked(clicked+1)

		//pass handleclick as jest mock function, asserrt that it was called number of times X button was clicked.
		handleClick();
	}

	return (
		<>
		<p>Clicked {clicked}</p>
		<button
			type="button"
			className={className}
			onClick={localHandleClick}
			disabled={isDisabled }>
			{isDisabled ? "disabled" : label }
		</button>
		</>
		
	);
}

export default Button;
