import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, value}) => {

	return (
		<form className="form-inline">
			<div className="form-group">
				<label htmlFor={name}>{label}:&nbsp;</label>
				<select name={name} className="form-control form-control-sm smaller" value={value} onChange={onChange}>
					<option value="short_term">1 Month</option>
					<option selected value="medium_term">6 Months</option>
					<option value="long_term">2 years</option>
				</select>
			</div>
		</form>
		);
};

export default SelectInput;