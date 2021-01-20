import React from 'react';
import PropTypes from 'prop-types';
import { Icon24Cancel } from '@vkontakte/icons';
import './index.scss';

const Modal = ({ title, children, onClose }) => {
    return (
        <div className="modal__shadow">
            <div className="modal">
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                    <div className="modal__close" onClick={onClose}>
                        <Icon24Cancel />
                    </div>
                </div>
                <div className="modal__content">{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func,
};

Modal.propTypes = {
    onClose: () => null,
};

export default Modal;