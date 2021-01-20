import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({ name, type, label, placeholder, defaultValue, onChange }) => {
    const [ value, setValue ] = useState(defaultValue);

    useEffect(() => {
        onChange(name, value);
    }, [value]);

    return (
        <div className="input">
            <label>
                <p>{label}</p>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </label>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    defaultValue: '',
    onChange: () => null,
};

export default Input;