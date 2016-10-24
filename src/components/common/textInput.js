import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, value}) => {
	let wrapperClass = 'form-group';

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input type="text" name={name} className="form-control" value={value} onChange={onChange} />
			</div>
		</div>
		);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
};

export default TextInput;