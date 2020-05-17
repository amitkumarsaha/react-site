import PropTypes from 'prop-types';
import React from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option key="defaultKey" value="" selected>{defaultOption}</option>
                    {
                        options.map((opt) => {
                            return <option key={opt.value} value={opt.value}>{opt.text}</option>;
                        })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectInput;