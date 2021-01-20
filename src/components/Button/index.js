import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ children, mode, onClick }) => {
    return (
        <div
            className={`button ${!!mode ? `button-${mode}` : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    mode: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    mode: '',
    onClick: () => null,
};

export default Button;